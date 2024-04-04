import userIcon from "../../assets/user.png";
import Button from "../../sharedComponents/Button";
import Menu from "./Menu";
function Navbar() {
  return (
    <nav className="container flex justify-between items-center gap-8 my-4">
      <div className="hidden lg:block"></div>
      {/* menu */}
      <Menu></Menu>

      {/* user information */}
      <div className="flex gap-4 items-center">
        <img
          className="max-w-[40px] object-cover cursor-pointer"
          src={userIcon}
          alt="userIcon"
        />
        <Button cls="bg-dark-2" name="Login"></Button>
      </div>
    </nav>
  );
}

export default Navbar;
