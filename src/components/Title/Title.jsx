import React from "react";
import './Title.css'

function Title({ text, children }) {
  const lenght = text.length;
  const deg = 360 / lenght;

  return (
    <div className="spinning-text-wrapper">
      <div className="spinning-text">
        <p>
          {text.split("").map((letra, i) => (
            <span
              key={i}
              style={{
                transform: `rotate(${deg * i}deg)`,
              }}
            >
              {letra}
            </span>
          ))}
        </p>
      </div>
      {children}
    </div>
  );
}

export default Title;