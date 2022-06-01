import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar () {
        return (
          // Bootstrap based NavBar
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Khebar Aapki</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-danger" to="/election">Election</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-warning" to="/business">Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-secondary" to="/entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-danger" to="/health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-primary" to="/science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-info" to="/sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-success" to="/technology">Technology</Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
            </div>
        )
    
}
