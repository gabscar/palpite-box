import React from 'react'
import Link from 'next/Link'

const perguntas = 'font-bold'  
const box = 'p-4 block shadow bg-blue-100 my-2 rounded'



const Pesquisa = () =>{
    return(
        <div>
            <h1 className = 'text-center font-bold mt-3 text-lg'>Críticas e sugestões</h1>
            <p className = 'mt-5 text-center'>
                Nós do estabelecimento y prezamos sempre por fornecer um excelente serviço <br/>
                a nossos clientes. Por esse motivo estamos sempre abertos a críticas e sugestões
            </p>
            <div className = 'w-32 mx-auto '>
                <label className = {perguntas} >Seu nome:</label>
                    <input type = 'text'className = {box} />
                
                <label className = {perguntas} >E-mail</label>
                     <input type = 'text' className = {box}/>

                <label className = {perguntas} >Whatsapp</label>
                     <input type = 'text' className = {box}/>

                <label className = {perguntas} >Sua crítica ou sugestão </label>
                     <input type = 'text' className = {box}/>

                <label className = {perguntas} >Que nota você daria ao estabelecimento</label>
                     <input type = 'text' className = {box}/>

                <label className = {perguntas} >Você indicaria a amigos?</label>
                    <input type = 'text' className = {box}/>


               
            </div>
        </div>
    )
} 

export default Pesquisa