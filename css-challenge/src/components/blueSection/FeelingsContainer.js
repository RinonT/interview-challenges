import React from 'react';
import FeelingList from './FeelingList';

export default function FeelingsContainer() {
  return (
    <div class="feelings_container">
      <div class="feelings_container_header">
        <h2 class="feelings_heading">How do you feel?</h2>
        <a href="#seemorefeeling" class="see_more_feelings_icon two_dotes">
          . .
        </a>
      </div>
      <div class="feeling_descriptions_container">
        <ul class="feeling_lists_container">
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
