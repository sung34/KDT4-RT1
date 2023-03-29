import React from "react";
import Card from "./Card";
import styles from "./cardContainer.module.css";

function CardContainer({ stationData }) {
  return stationData ? (
    <ul className={styles["card-container"]}>
      {stationData.map((data, index) => (
        <Card key={index} data={data} />
      ))}
    </ul>
  ) : null;
}

export default CardContainer;
