import React, { useState, useEffect } from "react";
import axios from "axios";
import getImg from "./cardData.js";
import Card from "./Imgcards";

export default function ImgList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const carddata = await axios.get(
          "https://api.nasa.gov/planetary/apod?api_key=r98SMmUN3WOtetJAbUUXwRtVYIceEZtu1pIoWju6"
        );
        setData(carddata.data);
      } catch {
        console.log("error");
      }
    }
    fetchData();
  }, []);

  return (
    <div className="img">
      <Card title={data.title} url={data.url} explanation={data.explanation} />
    </div>
  );
}
