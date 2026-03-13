export default function FileImporter({ onFileLoad }) {

  const handleFile = (event) => {

    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {

      const geojson = JSON.parse(e.target.result);

      onFileLoad(geojson);

    };

    reader.readAsText(file);
  };

  return (
    <>
      <input
        id="fileInput"
        type="file"
        accept=".json,.geojson"
        onChange={handleFile}
        style={{ display: "none" }}
      />
    </>
  );
}