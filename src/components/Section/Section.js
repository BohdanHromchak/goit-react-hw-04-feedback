import PropTypes from 'prop-types';
import css from './Section.module.css'

const Section = ({ title, children }) => {
    return (
      <div className={css.container}>
        <h1>{title}</h1>
        {children}
      </div>
    );
  };
  
  export default Section;
  
  Section.propTypes = {
    title: PropTypes.string.isRequired

  }