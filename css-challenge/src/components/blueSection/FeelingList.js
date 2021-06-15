import React from 'react';

export default function FeelingList({ imgPath, text }) {
  return (
    <li className="feeling">
      <div className="feeling_emojy_wrapper">
        <img className="feeling_emoji" src={imgPath} alt="Feeling emojy" />
      </div>
      <span className="feeling_description">{text}</span>
    </li>
  );
}
