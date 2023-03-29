import React from "react";
import styles from './card.module.css';

function Card({ data }) {
  console.log(data)
  const { sidoName, stationName, pm10Grade, pm10Value, dataTime } = data
  function pm10GradeEval(pm10Grade) {
    switch (pm10Grade) {
      case "1":
        return "매우 나쁨";
      case "2":
        return "나쁨";
      case "3":
        return "보통";
      case "4":
        return "좋음";
      case "5":
        return "매우 좋음";
      default:
        return "알 수 없음";
    }
  }

  return (
    <>
      {data ? (
        <li className={`${styles.card} ${pm10Grade ? styles[`card-grade${pm10Grade}`] : ''}`}>

          <h1>{sidoName}</h1>
          <h1>{stationName}</h1>
          <span>{pm10GradeEval(pm10Grade)}</span>
          <h3>수치: {pm10Value}</h3>
          <h5>측정 시간: {dataTime}</h5>
        </li>
      ) : (
        <></>
      )}
    </>
  )
}

export default Card;
