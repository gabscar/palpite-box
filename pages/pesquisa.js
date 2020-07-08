import React, {useState} from 'react'
import Link from 'next/Link'
import PageTitle from '../components/pageTitle'


const perguntas = 'font-bold'  
const box = 'p-4 block shadow bg-blue-100 my-3 rounded'



const Pesquisa = () =>{
    const [ form, setForm ] = useState({        
        Nome:'',
        Email : '',
        Whatsapp : '',
        Opniao : '',
        Nota: 0,
        Recomenda: ''
    })
    const [ sucess , setSucess ] = useState(false)
    const [ retorno , setRetorno ] = useState({})
    const Notas = [1,2,3,4,5]
    const resp=['Sim','Não']


    const save = async () =>{       
        try{
        const response = await fetch('/api/save', {
            method : 'POST',
            body: JSON.stringify(form)
        })
        const data = await response.json()
        setSucess(true)
        setRetorno(data)
        }catch(err){ }
    }

    const onChange = evt=>{
        const cache = evt.target.value
        const key = evt.target.name
        setForm(old => ({
            ...old,
            [key]: cache
        }))
    }


    return(                
        <div>
             <PageTitle title='Pesquisa'/>
            <h1 className = 'text-center font-bold mt-3 text-lg'>Críticas e sugestões</h1>
            <p className = 'mt-5 text-center'>
                Nós do estabelecimento y prezamos sempre por fornecer um excelente serviço <br/>
                a nossos clientes. Por esse motivo estamos sempre abertos a críticas e sugestões
            </p>
           {!sucess &&  <div className = 'w-32 mx-auto '>
                <label className = {perguntas} >Seu nome:</label>
                    <input type = 'text'className = {box} placeholder ='Nome' onChange={onChange} name='Nome' value = {form.Nome} />
                
                <label className = {perguntas} >Email:</label>
                     <input type = 'text' className = {box} placeholder ='Email' onChange={onChange} name='Email' value = {form.Email}/>

                <label className = {perguntas} >Whatsapp:</label>
                     <input type = 'text' className = {box} placeholder ='Whatsapp' onChange={onChange} name='Whatsapp' value = {form.Whatsapp}/>
                
                <label className = {perguntas} >Sua crítica ou sugestão </label>
                     <input type = 'text' className = {box} placeholder ='Sua crítica ou sugestão' onChange={onChange} name='Opniao' value = {form.Opniao}/>

                <label className = {perguntas} >Que nota você daria ao estabelecimento <br/></label>
                    <div className='flex py-3'>
                        {Notas.map(nota =>{
                            return ( <label className = 'block w-1/8 px-2 text-center '>{nota} <br/><input type = 'radio' name= 'Nota' onChange={onChange} value= {nota}/></label>)
                    
                        })}
                    </div>
                <label className = {perguntas} >Você indicaria a amigos?<br/> </label>
                    <div className='flex py-3'>
                        {resp.map(resposta =>{
                            return ( <label className = 'block w-1/4 px-6 text-center '>{resposta}<input type = 'radio' name= 'Recomenda' onChange={onChange} value= {resposta}/></label>)
                        })}
                    </div>
                <button className = 'bg-teal-400 px-8 py-5 font-bold rounded-lg shadow-lg hover:shadow' onClick = {save}> Enviar</button>
               
            </div>}
            {sucess && <div className= 'w-1/5 mx-auto '>
                <p className= 'mb-8 text-center bg-blue-200 border-t border-b border-blue-400 text-blue-700 px-12 py-3' >Obrigado por dar sua sugestão e/ou crítica</p>
                {retorno.newcupom && <div className= 'text-center border p-4 mb-4'> Seu Cupom: <br/>
                 <span className = 'font-bold text-2xl'>{retorno.Cupom}</span></div>}

                {retorno.newcupom && <div  className= 'border p-4 text-center mb-4' ><span className = 'mt-5'> {retorno.Promo}</span>
                    <br/><br/>
                    <span className = 'font-bold mt-8'>Tire um print ou foto do cupom e mostre aoi garçom </span>
                
                </div>}
            </div>}
        </div>
    )
} 

export default Pesquisa

/*
 <label className = {perguntas} >Sua crítica ou sugestão </label>
                     <input type = 'text' className = {box}/>

                <label className = {perguntas} >Que nota você daria ao estabelecimento</label>
                     <input type = 'text' className = {box}/>

                <label className = {perguntas} >Você indicaria a amigos?</label>
                    <input type = 'text' className = {box}/>
*/