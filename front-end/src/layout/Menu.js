import React from 'react'

import { Link } from 'react-router-dom'

function Menu(props) {
  return (
    <div class="nav-side-menu">
      <div class="brand">Periodic Table</div>
      <i class="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>

      <div class="menu-list">

        <ul id="menu-content" class="menu-content collapse out">
          <li>
            <a href="#">
              <span className="oi oi-dashboard" /> &nbsp; <Link to="/dashboard">Dashboard</Link>
            </a>
          </li>
          <li data-toggle="collapse" data-target="#service" class="collapsed">
            <a href="#"><span className="oi oi-magnifying-glass" /> &nbsp;

                  <Link to="/search">Search</Link> </a>
          </li>
          <li data-toggle="collapse" data-target="#new" class="collapsed">
            <a href="#"><span className="oi oi-plus" /> &nbsp;
                  <Link to="/reservations/new">New Reservation</Link> </a>
          </li>
          <li>
            <a href="#">
              <span className="oi oi-layers" /> &nbsp;  <Link to="/tables/new">New Table</Link>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Menu
