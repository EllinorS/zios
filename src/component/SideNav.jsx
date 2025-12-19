import { NavLink } from "react-router-dom"

const SideNav = () => {
  return (
  <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <NavLink className="navbar-item" to="/"> 
      <img src="../public/logo-zios.png" alt="" />
    </NavLink>



<a className="navbar-burger is-active" role="button" aria-label="menu" aria-expanded="false">
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
</a>



  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <NavLink className="navbar-item" to="/profileR">
        Profile
      </NavLink>
      <NavLink className="navbar-item" to="/ecrire">
        Écrire
      </NavLink>
      <NavLink className="navbar-item" to="/profileR/#saved">
        Sauvegardés
      </NavLink>



    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="button is-light">
            Log out
          </a>
        </div>
      </div>
    </div>
  </div>
  </div>
</nav>
  )
}

export default SideNav
