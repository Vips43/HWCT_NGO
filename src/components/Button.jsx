import React from "react";

function Button({ bgcolor, textclr, text }) {
  return (
    <>
      <button type="button"
        className={`${bgcolor} px-5 py-1 rounded-full text-sm ${textclr} font-semibold transition-all `}
      >
        {text}
      </button>
    </>
  );
}

export default Button;
