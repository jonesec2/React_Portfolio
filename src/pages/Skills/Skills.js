    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Christian Jones
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className={ window.location.pathname === "/" || window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
               Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className={window.location.pathname === "/projects" ? "nav-link active" : "nav-link"}>
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/experience" className={window.location.pathname === "/experience" ? "nav-link active" : "nav-link"} >
              Experience
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/education"
              className={window.location.pathname === "/education" ? "nav-link active" : "nav-link"}
            >
              Education
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/skills"
              className={window.location.pathname === "/skills" ? "nav-link active" : "nav-link"}
            >
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/interests"
              className={window.location.pathname === "/interests" ? "nav-link active" : "nav-link"}
            >
              Interests
            </Link>
          </li>
        </ul>
      </div>
    </nav>
   <div id="page-top">