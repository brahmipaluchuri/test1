import React,{useState,useEffect} from 'react';
import Link from 'next/link';

export const Menu=()=>{
  const[menuclick ,setMenuclick] = useState('')
  const [ismobilemenu,setIsmobilemenu] =useState(false)
  const [left,setLeft] = useState(-150)

  const getBrowserwidth=()=>{
    let timeoutId;
    let flag = true;
    setIsmobilemenu(document.body.offsetWidth < 600 ? true : false)
    window.addEventListener('resize',()=>{
      let width = document.body.offsetWidth
      if(flag){
        flag=false;
        setIsmobilemenu(width < 600 ? true : false)
      }
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        setIsmobilemenu(width < 600 ? true : false)
      },1000);
    })
  }

  useEffect(()=>{
      let pathName = window.location.pathname
      setMenuclick(pathName)
      setMenuclick(pathName.slice(1) || 'home')
      getBrowserwidth()
  },[])

  const fnclick=(eve)=>{
   setMenuclick(eve.target.id)
   if(ismobilemenu){
    setLeft(-150)
   }
  }

  const fnMobileBtn=()=>{
    setLeft(left === 0 ? -150 : 0)
  }
    return (
      <div>
        {ismobilemenu && <button onClick={fnMobileBtn} className='mobile-menu-btn'>Menu</button>}
      <ul style={{left:left}} className= {ismobilemenu ? 'mobile-menu' : 'menu'}>
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
    </div>
    )
}

