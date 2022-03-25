import React from "react";
import ContentHeader from "./ContentHeader";
import ContentFootet from "./ContentFooter";
import ContentItem from "./ContentItem";
import { Route, Routes } from "react-router-dom";

function Content() {
  return (
    <>
      <div
        id="content-wrapper"
        className="d-flex flex-column"
        style={{ width: `calc( 100% - 224px )`, left: 224 }}
      >
        <ContentHeader />
        <ContentItem />
        <ContentFootet />
      </div>
    </>
  );
}
export default Content;
