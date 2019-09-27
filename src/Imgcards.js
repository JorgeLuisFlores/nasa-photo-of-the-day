import React from "react";

export default function Card(props) {
  return (
    <div className="img-list">
      <img src={props.url} alt={props.title}></img>
      <div>{props.title}</div>
      <div>{props.explanation}</div>
    </div>
  );
}
