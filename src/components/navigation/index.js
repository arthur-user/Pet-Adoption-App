import React, { useEffect, useState } from "react";
import { getPetTypes } from "../../api/petfinder";
import Logo from "../../assets/logo.svg";
import Search from "../search";

// Import NavLink
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [petTypes, setPetTypes] = useState([]);

 useEffect(() => {
  async function getPetTypesData() {
    const types = await getPetTypes(); // no destructuring needed
    setPetTypes(types);
  }

  getPetTypesData();
}, []);

  return (
    <nav>
      <div className="nav-logo">
        <img src={Logo} alt="Petlover" />
        <Search />
      </div>
      <ul className="nav-links">
        <li key={"all"}>
          {/* These links should be NavLink component and add a special active class name if its an active link */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link${isActive ? " nav-link-active" : ""}`
            }
          >
            All Pets
          </NavLink>
        </li>
        {petTypes
          ? petTypes.map((type) => (
              <li key={type}>
                {/* These links should be NavLink component and add a special active class name if its an active link */}
                <NavLink
                  to={`/${type.toLowerCase()}`}
      className={({ isActive }) =>
        `nav-link${isActive ? " nav-link-active" : ""}`
      }
                >
                  {type}s
                </NavLink>{" "}
              </li>
            ))
          : "Loading..."}

        <li key="sign-up">
          <NavLink
            to="sign-up"
            className={({ isActive }) =>
              `nav-link${isActive ? " nav-link-active" : ""}`
            }
          >
            Sign Up
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
