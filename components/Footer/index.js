import React from 'react'
import Link from 'next/link'


const Footer = () =>{
    return(
    
            <div className= 'bg-blue-800 p-4'>
                <div className = 'container mx-auto text-white font-bold text-center pr-10 '>
                    Projeto desenvolvido por Gabriel Carvalho/                    
                    <a className= 'hover:bg-indigo-300' href= 'https://github.com/gabscar'>Git-Hub</a>           
                </div>
                <div className= 'mt-3'>
                    <a  className = 'inline px-32 ' href= 'https://devpleno.com'>
                        <img  className = 'inline ' src = '/logo_devpleno.png' alt= 'Devpleno'></img>
                    </a>
                    <a  className = 'inline ' href ='https://www.youtube.com/watch?v=vuCE2UZiYbE&list=PLBNBxpMAbyhXg3Ez0RpquaU6YmUtueJaQ'>
                        <img  className = 'inline px-12 mx-auto  ' src = '/logo_semfullstack.png' at= 'SemanaFullstack'></img>
                    </a>
                </div>
            </div>
     
    )

}

export default Footer