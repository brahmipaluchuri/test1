import React,{useState,useEffect} from 'react';
import Link from 'next/link';

export const Menu=()=>{
  const[menuclick ,setMenuclick] = useState('')

  useEffect(()=>{
      let pathName = window.location.pathname
      setMenuclick(pathName)
      setMenuclick(pathName.slice(1) || 'home')
  },[])

  const fnclick=(eve)=>{
   setMenuclick(eve.target.id)
  }

    return (
      <ul className='menu'>
      <li>
        <Link id='home' className={menuclick == 'home' && 'active-menu'} onClick={fnclick} href="/home">Home</Link>
      </li>
      <li>
        <Link  id='about' className={menuclick == 'about' && 'active-menu'} onClick={fnclick} href="/about">About us</Link>
      </li>
      <li>
        <Link id='contact' className={menuclick == 'contact' && 'active-menu'} onClick={fnclick} href="/contact">Contact</Link>
      </li>
    </ul>
    )
}

