import React from "react";
import "./paginator.css";

export default function Paginator({
  totalCharacters,
  charactersPerPage,
  setPage,
}) {
  const pages = [];

  for (let page = 1; page <= totalCharacters / charactersPerPage; page++) {
    pages.push(page);
  }

  function pageClick(page, event) {
    console.log("page", page, "event", event);
    setPage(page);
  }
  return (
    <div>
      <ul className="paginator">
        {pages.map((page) => {
          return (
            <li key={page} onClick={(event) => pageClick(page, event)}>
              {page}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
