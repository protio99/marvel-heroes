import React, { useState, useEffect } from "react";
import "./comicModal.css";

export default function ComicModal({ data, setModalHide }) {
  const [comicData, setComicData] = useState({
    thumbnail: { path: "" },
  });
  // const [modalHideComic, setModalHideComic] = useState(modalHide);

  useEffect(() => {
    if (!data) {
      return;
    }

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
