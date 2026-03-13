import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import "leaflet-draw";
import "leaflet-control-geocoder";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";

export default function MapView({ geojsonData }) {

  const mapRef = useRef(null);
  const drawnItemsRef = useRef(null);

  useEffect(() => {

    if (mapRef.current) return;

    // CRIAR MAPA
    const map = L.map("map").setView([-20.4697, -54.6201], 13);
    mapRef.current = map;

    // CAMADA BASE
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap"
    }).addTo(map);

    // BUSCA DE ENDEREÇO
    L.Control.geocoder().addTo(map);

    // GRUPO PARA DESENHO
    const drawnItems = new L.FeatureGroup();
    drawnItemsRef.current = drawnItems;
    map.addLayer(drawnItems);

    // CONTROLE DE DESENHO
    const drawControl = new L.Control.Draw({
      edit: {
        featureGroup: drawnItems
      }
    });

    map.addControl(drawControl);

    // CRIAR ELEMENTOS
    map.on(L.Draw.Event.CREATED, function (event) {

      const layer = event.layer;

      drawnItems.addLayer(layer);

      saveData();

    });

    // MOSTRAR COORDENADAS AO CLICAR
    map.on("click", function(e){

      const lat = e.latlng.lat.toFixed(5);
      const lng = e.latlng.lng.toFixed(5);

      L.popup()
        .setLatLng(e.latlng)
        .setContent(`
          <b>Coordenadas</b><br/>
          Latitude: ${lat}<br/>
          Longitude: ${lng}
        `)
        .openOn(map);

    });

    // CARREGAR DADOS SALVOS
    const saved = localStorage.getItem("mapData");

    if(saved){

      const geojson = JSON.parse(saved);

      const layer = L.geoJSON(geojson);

      drawnItems.addLayer(layer);

    }

    const toolControl = L.control({ position: "topleft" });

toolControl.onAdd = function () {

  const div = L.DomUtil.create("div", "leaflet-bar");

  div.innerHTML = `
    <a href="#" title="Importar GeoJSON">⬆</a>
    <a href="#" title="Exportar GeoJSON">⬇</a>
    <a href="#" title="Limpar mapa">🗑</a>
  `;

  const buttons = div.querySelectorAll("a");

  // IMPORTAR
  buttons[0].onclick = function (e) {
    e.preventDefault();
    document.getElementById("fileInput").click();
  };

  // EXPORTAR
  buttons[1].onclick = function (e) {
    e.preventDefault();

    const data = drawnItemsRef.current.toGeoJSON();

    const blob = new Blob(
      [JSON.stringify(data, null, 2)],
      { type: "application/json" }
    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "mapa.geojson";
    a.click();
  };

  // LIMPAR
  buttons[2].onclick = function (e) {
    e.preventDefault();
    drawnItemsRef.current.clearLayers();
    localStorage.removeItem("mapData");
  };

  return div;
};

toolControl.addTo(map);

    
    // PONTOS DA SANESUL
    

    const sanesulIcon = L.icon({
      iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
      iconSize: [30, 30]
    });

    const sanesul1 = L.marker([-20.4486, -54.6295], {icon: sanesulIcon}).addTo(map);

    sanesul1.bindPopup(`
      <b>Sanesul - Administração Central</b><br/>
      Campo Grande - MS<br/>
      Lat: -20.4486<br/>
      Lng: -54.6295
    `);

    const sanesul2 = L.marker([-20.4706, -54.6226], {icon: sanesulIcon}).addTo(map);

    sanesul2.bindPopup(`
      <b>Sanesul - Unidade Operacional</b><br/>
      Campo Grande - MS<br/>
      Lat: -20.4706<br/>
      Lng: -54.6226
    `);

    // ---------------------

    function saveData(){

      const data = drawnItems.toGeoJSON();

      localStorage.setItem(
        "mapData",
        JSON.stringify(data)
      );

    }

  }, []);

  // IMPORTAR GEOJSON
  useEffect(() => {

    if (!geojsonData || !drawnItemsRef.current) return;

    const layer = L.geoJSON(geojsonData);

    drawnItemsRef.current.addLayer(layer);

    mapRef.current.fitBounds(layer.getBounds());

  }, [geojsonData]);

  return <div id="map" style={{ height: "100vh", width: "100%" }}></div>;
}