import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
  return (

    <nav className="navbar navbar-expand-lg bg-transparent border-0 shadow-0 navbar-light px-lg-5">

      <Link className="navbar-brand text-danger" to="/">Netflix</Link>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">

          <li className="nav-item active">
            <Link className="nav-link text-white" to="/home">Home <span className="sr-only">(current)</span> </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white" to="/tv-show">TV Show</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies">Movies</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white" to="/recently">Recently Added</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white" to="/my-list">My List</Link>
          </li>
        </ul>

        <div className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" >Search</button>

          <div className="navbar-nav mr-auto">
            <div className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle text-white" to="#" 
                    id="navbarDropdownList" role="button" data-toggle="dropdown" 
                    aria-haspopup="true" aria-expanded="false">
                Bell Icon
              </Link>
              <div className="dropdown-menu" style={{ padding: 0 }} aria-labelledby="navbarDropdownList">
                <ul className="list-group">
                  <li className="list-group-item">
                    <div>
                      <Link to="/serie1">imagen</Link>
                      <Link to="/serie1">Titulo</Link>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div>
                      <Link to="/serie2">imagen</Link>
                      <Link to="/serie2">Titulo</Link>
                    </div>
                  </li><li className="list-group-item">
                    <div>
                      <Link to="serie3">imagen</Link>
                      <Link to="serie3">Titulo</Link>
                    </div>
                  </li><li className="list-group-item">
                    <div>
                      <Link to="serie4">imagen</Link>
                      <Link to="serie4">Titulo</Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="navbar-nav mr-auto">
            <div className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle text-white" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                User icon
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/user">Usuario</Link>
                <Link className="dropdown-item" to="/manage-profiles">Manage Profiles</Link>
                <div className="dropdown-divider" />
                <Link className="dropdown-item" to="/acount">Acount</Link>
                <Link className="dropdown-item" to="/help">Help Center</Link>
                <Link className="dropdown-item" to="/logout">Sing out of Netflix</Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </nav>

  )
}

export default NavBar;


