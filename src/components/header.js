import React from "react"
import { Link } from 'gatsby'

// import './header.module.scss';
import headerStyles from './header.module.scss'

const Header = () => (
  <header>
    <h1>AK; front-end developer</h1>
    <nav>
      <ul>
        <li>
          <Link className={headerStyles.link} to="/">Home</Link>
        </li>
        <li>
          <Link className={headerStyles.link} to="/blog">Blog</Link>
        </li>
        <li>
          <Link className={headerStyles.link} to="/about">About</Link>
        </li>
        <li>
          <Link className={headerStyles.link} to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
