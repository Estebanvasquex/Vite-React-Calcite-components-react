import { useState } from 'react';
import { setAssetPath } from "@esri/calcite-components/dist/components";
import "@esri/calcite-components/dist/components/calcite-button";
import "@esri/calcite-components/dist/components/calcite-icon";
import "@esri/calcite-components/dist/components/calcite-slider";
import {
  CalciteAccordion,
  CalciteButton,
  CalciteIcon,
  CalciteSlider
} from '@esri/calcite-components-react';

import "@esri/calcite-components/dist/calcite/calcite.css";
import MapaGeneral from './components/MapaGeneral/MapaGeneral';

setAssetPath(window.location.href);

function App() {
  const [sliderValue, setSliderValue] = useState (2);

  return (
    <>
      <h1>
        PRIMER MAPA<CalciteIcon icon="banana" />
      </h1>
      <MapaGeneral/>
      <CalciteButton onClick={() => setSliderValue(0)}>Reset</CalciteButton>
      <CalciteSlider
        min={1}
        max={100}
        value={sliderValue}
        step={1}
        onCalciteSliderInput={(e) => setSliderValue(e.target.value)}
      />
      <p>The slider currently has a value of {sliderValue}</p>

    </>
  );
}

export default App;