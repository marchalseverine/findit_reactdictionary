import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="search">
      <form>
        <div className="input-group mb-3 search">
          <input
            type="text"
            className="form-control"
            placeholder="Type a word"
            aria-label="Type a word"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
