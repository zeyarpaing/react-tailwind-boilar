import React, { useState } from "react";

const Button = ({ children, doAfterOnClick }) => {
  return (
    <button
      onClick={() => doAfterOnClick("hello from btn")}
      className="px-4 py-2 bg-green-500 text-white "
    >
      {children}
    </button>
  );
};
export default Button;
