import Link from 'next/link'
import React from 'react'
import "./style.css"

function Header() {
    return (
        <div className='header-parent'>
            <div className='header-logo'>
                News.com
            </div>
        <div>
          <Link href="/about">About</Link>
          <Link href="/a"></Link>
        </div>
      </div>
    );
}

export default Header