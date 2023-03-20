import React, { useState, useEffect } from "react";
import "./comicModal.css";

export default function ComicModal({ data, setModalHide }) {
  console.log("data por fuera del useEffect", data);

  const [comicData, setComicData] = useState({
    thumbnail: { path: "" },
  });
  // const [modalHideComic, setModalHideComic] = useState(modalHide);
  console.log("modal data", comicData);
  useEffect(() => {
    if (!data) {
      return;
    }
    console.log("data dentro del useEffect", data);
    setComicData(data);
  }, [data]);

  return (
    <div
      key={comicData.id}
      // className={!modalHide ? "modalVisible" : "modalHide"}
    >
      <h4>{comicData.title}</h4>
      <img src={`${comicData.thumbnail.path}/portrait_incredible.jpg`}></img>
      <p>{comicData.description}</p>
      <button onClick={() => setModalHide(true)}>Close</button>
      <button>Add to favorite</button>
      <button>Buy it now</button>
    </div>
  );
}
