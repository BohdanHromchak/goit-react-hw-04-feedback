import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'

const FeedbackOptions = ({ onLeaveFeedback }) => {
    return (
      <div className={css.container}>
        <button id="good" onClick={onLeaveFeedback} className={css.button}>
          Good
        </button>
        <button id="neutral" onClick={onLeaveFeedback} className={css.button}>
          Neutral
        </button>
        <button id="bad" onClick={onLeaveFeedback} className={css.button}>
          Bad
        </button>
      </div>
    );
  };
  
  export default FeedbackOptions;
  
  FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired
  }