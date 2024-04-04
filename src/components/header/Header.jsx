import { Link } from "react-router-dom";
import BreakingNews from "./BreakingNews";
import DateFormate from "./DateFormate";
import Logo from "./Logo";

function Header() {
  return (
    <header className="container py-3 flex flex-col justify-center items-center space-y-3">
      <Link to="/" className="border-2 p-1 border-dashed border-gray-300">
        <Logo></Logo>
      </Link>
      <span className="font-medium text-sm text-dark-3">
        Journalism Without Fear or Favour
      </span>
      <DateFormate></DateFormate>
      <BreakingNews></BreakingNews>
    </header>
  );
}

export default Header;
