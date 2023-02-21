import React from "react";
import "./styles.css";
import empty from "../../../assets/13525-empty.gif";

const EmptyList = () => (
  <div className="emptyList-wrap">
    <img src={empty} alt="empty" />
  </div>
);

export default EmptyList;
