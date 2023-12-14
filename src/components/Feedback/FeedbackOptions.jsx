import React from 'react';
import css from './feedbaskOption.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.control}>
    {options.map(option => (
      <button className={css.option}
        key={option}
        type="button"
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </div>
);

export { FeedbackOptions };
