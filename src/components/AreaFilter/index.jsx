import React, { useEffect } from "react";
import { sidoNames } from "@/constants/sidoNames";

function AreaFilter({ isSidoOnly, locationState }) {
  return (
    <>
      <select onChange={(e) => locationState.setSido(e.target.value)}>
        {sidoNames.map((sidoName, index) => (
          <option key={index} value={sidoName}>
            {sidoName}
          </option>
        ))}
      </select>

      { isSidoOnly ? null : (
        <select onChange={(e) => locationState.setStation(e.target.value)}>
          <option value="">지역 선택</option>
          {Object.values(locationState.stationData).map((station, index) => (
            <option key={index} value={station.stationName}>
              {station.stationName}
            </option>
          ))}
        </select>
      )}
    </>
  );
}


export default AreaFilter;
