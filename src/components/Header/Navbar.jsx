import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    { name: "Home", to: "/", id: 1 },
    { name: "All Food Items", to: "/allFoodItems", id: 2 },
    { name: "Blog", to: "/blog", id: 3 },
    { name: "About-us", to: "/about-us", id: 4 },
    { name: "Login", to: "/login", id: 5 }
    
  ];
  return (
    <div className="navbar  w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links.map((link) => (
              <NavLink key={link.id} to={link.to}>
                {link.name}
              </NavLink>
            ))}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Laridae🍳</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5">
          {links.map((link) => (
            <NavLink key={link.id} to={link.to}>
              {link.name}
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
