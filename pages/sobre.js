import react from 'react'
import Link from 'next/link'
import PageTitle from '../components/pageTitle'

const Sobre = () =>{
    
    return (
        <div>
            <PageTitle title= 'Sobre' />
            <h1 className= 'text-center font-bold mt-3 text-lg'>Sobre</h1>
            <p className = 'mt-5 text-center'>
                Projeto desenvolvido para estudar
            </p>
        </div>
    )
}


export default Sobre 