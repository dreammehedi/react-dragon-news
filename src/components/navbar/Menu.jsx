import { NavLink } from "react-router-dom";

const menuContent = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Career",
    path: "/career",
  },
];

function Menu() {
  return (
    <ul className="flex justify-center items-center gap-4 text-dark-3 capitalize">
      {menuContent.map((menu) => {
        const { id, name, path } = menu;
        return (
          <li key={id}>
            <NavLink
              className={({ isActive }) => {
                return isActive ? "text-primary font-semibold" : null;
              }}
              to={path}
            >
              {name}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default Menu;
