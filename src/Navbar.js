import React, { useState } from "react";
import Login from "./components/Login";
import Main from "./components/Main";

function Navbar() {
  let [issubmit, setissubmit] = useState(false);
  let [entry, setEntry] = useState([]);

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <a href="./login" className="navbar-brand">
          Beimagine
        </a>
        <div className="ml-auto">
          <ul className="navbar-nav">
            <li className="nav-item">
              {issubmit ? <h5 className="nav-link">{entry[0].name}</h5> : ""}
            </li>
            <li className="nav-item">
              {issubmit ? (
                <a
                  href="./login"
                  className="nav-link btn btn-warning text-dark"
                >
                  Logout
                </a>
              ) : (
                ""
              )}
            </li>
          </ul>
        </div>
      </nav>
      {entry !== [] && issubmit ? (
        <Main />
      ) : (
        <Login
          issubmit={issubmit}
          setissubmit={setissubmit}
          entry={entry}
          setEntry={setEntry}
        />
      )}
    </div>
  );
}

export default Navbar;
