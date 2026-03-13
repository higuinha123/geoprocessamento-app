import { Marker, Popup } from "react-leaflet";

export default function SanesulPoints() {

  return (
    <>
      <Marker position={[-20.4697, -54.6201]}>
        <Popup>
          <b>Sanesul Unidade 1</b><br/>
          Campo Grande MS<br/>
          Lat: -20.4697<br/>
          Lon: -54.6201
        </Popup>
      </Marker>

      <Marker position={[-20.4517, -54.6155]}>
        <Popup>
          <b>Sanesul Unidade 2</b><br/>
          Campo Grande MS<br/>
          Lat: -20.4517<br/>
          Lon: -54.6155
        </Popup>
      </Marker>
    </>
  );
}