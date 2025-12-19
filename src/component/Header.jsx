import { NavLink } from "react-router-dom"
import Dark from "./reusable/DarkMode"

const Header = () => {
  return (

<nav className="navbar is-fixed-top py-4" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <NavLink className="navbar-item" to="/"> 
      <img src="../img/logo-zios.png" alt="" />
    </NavLink>

    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
       <span aria-hidden="true"></span>
       <span aria-hidden="true"></span>
       <span aria-hidden="true"></span>
       <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarMenu" className="navbar-menu">

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <NavLink to="/inscription" className="button is-primary">
            <strong>Inscription</strong>
          </NavLink>
          <NavLink to="/login" className="button is-light">
            Connexion
          </NavLink>
          <Dark/>
        </div>
      </div>
    </div>

  </div>
</nav>


  )
}

export default Header

