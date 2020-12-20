import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'
const text= 'px-2 hover:bg-indigo-300 font-bold'

const Header = () =>{
    return (
        <React.Fragment>
        <div className = {styles.title}>  
            <div className= 'container mx-auto'>
                 <img className='mx-auto' src='/logo_palpitebox.png' alt='PalpiteBox'/>
             </div>
        </div>
        <div className= {styles.menu} >
            <Link href = '/'><a className = {text}> Homepage</a></Link> 

            <Link href='/sobre'><a className= {text} >Sobre  {" "}  </a></Link> 

            <Link href='/contato'><a className= {text} >Contato {" "}</a></Link> 
        </div>
        </React.Fragment>
    )
}

export default Header