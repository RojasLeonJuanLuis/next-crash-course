import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className="hero is-primary">
      <div className="hero-body">
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
      </div>
      <style jsx>
        {`
          a{
            font-size: 18px;
            color: #000;
            margin-right: 20px;
            text-decoration: none;
          }
        `}
      </style>
    </div>
  )
}
export default NavBar
