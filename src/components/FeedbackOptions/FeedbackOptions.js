import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'

const FeedbackOptions = ({ setGood, setNeutral, setBad }) => {
    return (
      <div className={css.container}>
        <button onClick={setGood} className={css.button}>
          Good
        </button>
        <button onClick={setNeutral} className={css.button}>
          Neutral
        </button>
        <button onClick={setBad} className={css.button}>
          Bad
        </button>
      </div>
    );
  };
  
  export default FeedbackOptions;
  
  FeedbackOptions.propTypes = {
    setGood: PropTypes.func.isRequired,
    setNeutral: PropTypes.func.isRequired,
    setBad: PropTypes.func.isRequired,
  }