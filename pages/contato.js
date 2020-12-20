import react from 'react'
import Link from 'next/Link'
import PageTitle from '../components/pageTitle'
const Contato = () =>{

    return(
        <div >
            <PageTitle title= 'Contato'/>
            <h1 className= 'text-center font-bold mt-3 text-lg'>Contatos</h1>
            <p className = 'mt-5 text-center'>
               informações para contato 
            </p>
          
        </div>
    )
}
export default Contato