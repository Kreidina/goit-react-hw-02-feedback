import { Notification } from 'components/Notification/Notification';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  totalOnChage,
}) => {
  return (
    <div>
      <h2 className={css.title}>Statistics</h2>
      {total === 0 ? (
        <Notification message="There is no feedback"></Notification>
      ) : (
        <ul className={css.list}>
          <li className={css.item}>Good: {good}</li>
          <li className={css.item}>Neutral: {neutral}</li>
          <li className={css.item}>Bad: {bad}</li>
          <li onChange={totalOnChage} className={css.item}>
            Total: {total}
          </li>
          <li className={css.item}>Positive feedback: {positivePercentage}%</li>
        </ul>
      )}
    </div>
  );
};
