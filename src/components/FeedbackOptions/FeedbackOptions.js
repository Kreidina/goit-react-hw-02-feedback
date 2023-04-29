import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <ul className={css.btnList}>
        {options.map(option => (
          <li key={option} className={css.btnItem}>
            <button
              type="button"
              className={css.btnReviews}
              onClick={onLeaveFeedback}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
