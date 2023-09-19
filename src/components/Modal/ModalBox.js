import React from "react";
import "./Modal.css";
export const ModalBox = ({ children }) => {
  return (
    <div className="backdrop">
      <div className="modal">{children}</div>
    </div>
  );
};
