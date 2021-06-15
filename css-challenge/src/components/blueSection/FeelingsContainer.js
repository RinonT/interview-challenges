import React from 'react';
import FeelingList from './FeelingList';

export default function FeelingsContainer() {
  return (
    <div className="feelings_container">
      <div className="feelings_container_header">
        <h2 className="feelings_heading">How do you feel?</h2>
        <a href="#seemorefeeling" className="see_more_feelings_icon two_dotes">
          . .
        </a>
      </div>
      <div className="feeling_descriptions_container">
        <ul className="feeling_lists_container">
          <FeelingList imgPath="./assets/sad_emojy.png" text="Badly" />
          <FeelingList imgPath="./assets/fine-emojy.png" text="Fine" />
          <FeelingList imgPath="./assets/very_well_emojy.png" text="Well" />
          <FeelingList
            imgPath="./assets/excellent_emojy.png"
            text="Excellent"
          />
        </ul>
      </div>
    </div>
  );
}
