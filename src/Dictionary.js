import React from "react";
import Search from "./Search";
import "./Dictionary.css";

export default function Dictionary() {
  return (
    <div className="dictionary">
      <h1 className="app-header">What are you looking for ?</h1>
      <Search />
    </div>
  );
}
