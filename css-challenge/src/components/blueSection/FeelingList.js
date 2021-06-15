import React from 'react';

export default function FeelingList({ imgPath, text }) {
  return (
    <li class="feeling">
      <div class="feeling_emojy_wrapper">
        <img class="feeling_emoji" src={imgPath} alt="Feeling emojy" />
      </div>
      <span class="feeling_description">{text}</span>
    </li>
  );
}
