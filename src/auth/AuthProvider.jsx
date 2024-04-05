import PropTypes from "prop-types";
function AuthProvider({ children }) {
  return <>{children}</>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AuthProvider;
