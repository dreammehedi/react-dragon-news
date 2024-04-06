import PropTypes from "prop-types";
import AuthContext from "../context/AuthContext";
import { authInfo } from "./authInfo";
function AuthProvider({ children }) {
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AuthProvider;
