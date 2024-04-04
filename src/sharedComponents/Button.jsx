import PropTypes from "prop-types";
function Button({ type, cls, name, click }) {
  return (
    <>
      <button
        type={type}
        onClick={click}
        className={`${cls} text-white text-base md:text-xl font-medium py-2 px-6 rounded-sm`}
      >
        {name}
      </button>
    </>
  );
}
Button.propTypes = {
  type: PropTypes.string,
  cls: PropTypes.string,
  name: PropTypes.string.isRequired,
  click: PropTypes.func,
};
export default Button;
