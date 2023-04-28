import css from './Button.module.css';

export const Button = ({ btns, handelClick }) => {
  return (
    <div>
      <h2 className={css.title}>Please leave feedback</h2>
      <ul className={css.btnList}>
        {btns.map(btn => (
          <li key={btn} className={css.btnItem}>
            <button className={css.btnReviews} onClick={handelClick}>
              {btn}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
