import React from 'react';
import ExerciseList from './ExerciseList';

export default function ExercisesListContainer() {
  return (
    <div className="exercises_container">
      <ExerciseList
        wrapperClass={'exercise_wrapper_with_shadow'}
        iconClass={'heart_icon_container'}
        imgPath={'./assets/heart.svg'}
        exerciseName={'Speaking skills'}
        exerciseNumbers={'16 exercises'}
      />
      <ExerciseList
        wrapperClass={'exercise_wrapper_bordered'}
        iconClass={'reader_icon_container'}
        imgPath={'./assets/user_in_reading.svg'}
        exerciseName={'Reading speed'}
        exerciseNumbers={'8 exercises'}
      />
      <ExerciseList
        wrapperClass={'hidden_exercise_wrapper'}
        iconClass={'hidden_icon_container'}
        imgPath={'./assets/heart.svg'}
        exerciseName={'Speaking skills'}
        exerciseNumbers={'16 exercises'}
      />
    </div>
  );
}
