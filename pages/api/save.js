import {GoogleSpreadsheet} from 'google-spreadsheet'

import moment from 'moment'


const doc= new GoogleSpreadsheet(process.env.DOC_ID)

const newcupom = () =>{
    const val = parseInt(moment().format('DDMMYYYYHHmmSSS')).toString(16);
    return val.substr(0,4) + '-' + val.substr(4,4) + '-' + val.substr(8,4)
}
export default async(req,res) =>{
    try{
      //  await doc.useServiceAccountAuth(credentials)
        await doc.useServiceAccountAuth({
            client_email: process.env.SHEET_CLIENT,
            private_key: process.env.SHEET_KEY
        })
        await doc.loadInfo()
        const sheet =doc.sheetsByIndex[2]
        const data =JSON.parse(req.body)

        const sheetConfig = doc.sheetsByIndex[1]
        await sheetConfig.loadCells('A3:B3')

        const celpromo = sheetConfig.getCell(2 ,0)       
        const celltexto = sheetConfig.getCell(2,1)

        let Cupom= ''
        let Promo= ''
        if (celpromo.value === 'VERDADEIRO'){
            Cupom = newcupom()
            Promo = celltexto.value
        }

        await sheet.addRow({
            Nome :data.Nome,
            Email: data.Email,
            Whatsapp:data.Whatsapp,
            'Data': moment().format('DD/MM/YYYY HH:mm a'),
            Nota : data.Nota,
            Cupom,
            Promo,
            Recomenda: data.Recomenda
        })        
        res.end(JSON.stringify({
            newcupom : Cupom !== '',
            Cupom,
            Promo
        }))
    }catch(err){
        res.end('error') 
    }
}


//JSON.parse transforma para objeto 