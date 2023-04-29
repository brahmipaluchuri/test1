import React from 'react'
import Link from 'next/link'

export const Menu=()=>{
    return (
      <ul className='menu'>
      <li>
        <Link href="/home">Home</Link>
      </li>
      <li>
        <Link href="/about">About us</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
    )
}

