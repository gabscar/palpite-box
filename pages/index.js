import react from 'react'
import Link from'next/link'
import useSWR from 'swr'
import PageTitle from '../components/pageTitle'


const button = 'bg-teal-400 px-6 py-5 font-bold rounded-lg shadow-lg hover:shadow'

const fetcher = (...args) => fetch(...args).then(res => res.json())


const Index=()=>{
    const {data,error} = useSWR('/api/get-promo', fetcher)

   // return (<pre>{JSON.stringify(data)}</pre>) -> verificar o dado que está sendo trazido (se está retornando o dado ou n)
    return (        
        <div>   
            <PageTitle title= 'Bem-Vindo'/>
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
         
            {!data && <p>Carregando...</p>}
            {! error && data && data.showCupon &&
                    <p className = 'my-12 text-center'> {data.message}</p>
            }
        </div>  
    )
}

export default Index






 /*isso é um if no react 
 {!data && <p>Carregando...</p>}*/