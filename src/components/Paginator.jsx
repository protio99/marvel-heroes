import React, { useEffect, useState } from "react";
import "./paginator.css";

export default function Paginator({
  totalCharacters,
  charactersPerPage,
  setPage,
}) {
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const pages = [];
    for (let page = 1; page <= totalCharacters / charactersPerPage; page++) {
      pages.push(page);
    }
    setPages(pages);
  }, []);

  function pageClick(page, event) {
    console.log("page", page, "event", event);
    setCurrentPage(page);
  }

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  return (
    <div>
      <ul className="paginator">
        {pages.map((page) => {
          return (
            <li
              key={page}
              className={
                currentPage === page
                  ? "paginator__number--selected"
                  : "paginator__number"
              }
              onClick={(event) => pageClick(page, event)}
            >
              {page}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
