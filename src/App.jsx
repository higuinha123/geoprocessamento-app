import { useState } from "react";
import MapView from "./components/MapView";
import FileImporter from "./components/FileImporter";

function App() {

  const [geojsonData, setGeojsonData] = useState(null);

  return (
    <div>

      <FileImporter onFileLoad={setGeojsonData} />

      <MapView geojsonData={geojsonData} />

    </div>
  );

}

export default App;