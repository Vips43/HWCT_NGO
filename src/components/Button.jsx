import React from "react";

function Button({ bgcolor, link, textclr, text }) {

  const baseStyles = `${bgcolor} ${textclr} px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:brightness-110 active:scale-95 inline-block text-center cursor-pointer`;
  
  if (link) {
    return (
      <a href={link} className={baseStyles}>
        {text}
      </a>
    );
  }

  return (
    <button type="button" className={baseStyles}>
      {text}
    </button>
  );
}


export default Button;
