import React from 'react';

export default function ExerciseList({
  wrapperClass,
  iconClass,
  imgPath,
  exerciseName,
  exerciseNumbers,
}) {
  return (
    <div className={`exercise_wrapper ${wrapperClass}`}>
      <div className={`exercise_icon_container ${iconClass}`}>
        <img src={imgPath} alt="exercise icon" />
      </div>
      <div>
        <h3 className="exercise_name">{exerciseName}</h3>
        <span className="exercise_numbers">{exerciseNumbers}</span>
      </div>
      <div className="see_more_container">
        <a className="see_more two_dotes" href="#seemore">
          . .
        </a>
      </div>
    </div>
  );
}
