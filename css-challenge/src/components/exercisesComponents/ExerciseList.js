import React from 'react';

export default function ExerciseList({
  wrapperClass,
  iconClass,
  imgPath,
  exerciseName,
  exerciseNumbers,
}) {
  return (
    <div class={`exercise_wrapper ${wrapperClass}`}>
      <div className={`exercise_icon_container ${iconClass}`}>
        <img src={imgPath} alt="exercise image" />
      </div>
      <div>
        <h3 class="exercise_name">{exerciseName}</h3>
        <span class="exercise_numbers">{exerciseNumbers}</span>
      </div>
      <div class="see_more_container">
        <a class="see_more two_dotes" href="#seemore">
          . .
        </a>
      </div>
    </div>
  );
}
