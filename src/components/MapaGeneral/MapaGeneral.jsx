/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
import { loadModules } from "esri-loader"; //Permite cargar toda la api de esri

export default function MapaGeneral() {
  const viewRef = useRef(null);
  const layerRef = useRef(null);
  let webmap;
  let foundLayer;
  let view;

  useEffect(() => {
    const loadMap = async () => {
      loadModules(["esri/WebMap", "esri/views/MapView"], { css: true })
        .then(async ([WebMap, MapView]) => {
           
            const map = new WebMap({
                basemap: "streets-vector",       
          });

          const view = new MapView({
            map,
            container: "mapDiv",
            center: [-75.6, 6.22],
            zoom: 4,
            padding: {
              left: 49,
            },
          });

          webmap.load().then(() => {
            viewRef.current = view;
          });
        })
        .catch((err) => {
          console.error("Error loading modules: ", err);
        });
    };
    loadMap();
  }, []);

  return (
    <div className="contenedor-mapa">
      <div
        id="mapDiv"
        className="recuadro-mapa"
        style={{ height: "800px", width: "100%" }}
      ></div>
    </div>
  );
}