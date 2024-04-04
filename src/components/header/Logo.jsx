import logo from "../../assets/logo.png";
function Logo() {
  return (
    <img
      className="max-w-[300px] md:max-w-[350px] object-contain mx-auto"
      src={logo}
    ></img>
  );
}

export default Logo;
