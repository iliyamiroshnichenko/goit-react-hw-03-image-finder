import PropTypes from 'prop-types';

interface IButton {
  onClick: () => void;
}

const Button = ({ onClick }: IButton) => {
  return (
    <button type="button" className="Button" onClick={onClick}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
