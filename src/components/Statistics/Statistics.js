import PropTypes from 'prop-types';
import css from './Statistics.module.css'

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
      <div className={css.container}>
    <h2>Statistics</h2>
  <span>Good: {good}</span>
  <span>Neutral: {neutral}</span>
  <span>Bad: {bad}</span>
  <span>Total: {total}</span>
  <span>Positive feedback: {positivePercentage} %</span>
      </div>
    );
  };
  
  export default Statistics;
  
  Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired,
  }