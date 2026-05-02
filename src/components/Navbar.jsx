import { Link } from "react-router-dom";
function Navbar(){
    return(
        <div>

<nav className="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme="dark">
  <div className="container-fluid">
   

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto gap-4">
        <li className="nav-item mx-4">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>

        <li className="nav-item mx-4">
          <Link className="nav-link" to="/about">About</Link>
        </li>

        
          
        
        <li className="nav-item mx-4">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>

      </ul>
      
    </div>
  </div>
</nav>






        </div>
    )
}
export default Navbar;