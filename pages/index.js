import React from 'react'
import Link from'next/link'

const button = 'bg-teal-400 px-6 py-5 font-bold rounded-lg shadow-lg hover:shadow'


const Index=()=>{
    return ( 
        <React.Fragment>   
            <div className = 'mt-12 text-center'>
                <p >
                    Nós do estabelecimento y prezamos sempre por fornecer um excelente serviço <br/>
                    a nossos clientes. Por esse motivo estamos sempre abertos a críticas e sugestões
                </p> 
            </div>            
            <div className = 'my-12 text-center'>
                <Link href = '/pesquisa'>
                    <a className = {button}>Dar Opnião ou Sugestão</a>
                </Link>
            </div>
        </React.Fragment>  
    )
}

export default Index