
//pelo next pode usar o import
import {GoogleSpreadsheet} from 'google-spreadsheet'


//const { GoogleSpreadsheet } = require('google-spreadsheet')
//const credentials = require('../../credentials.json')


const doc = new GoogleSpreadsheet(process.env.DOC_ID)

export default async(req,res) =>{

    try{
        await doc.useServiceAccountAuth({
            client_email: process.env.SHEET_CLIENT,
            private_key: process.env.SHEET_KEY
        })
        await doc.loadInfo()
        
        const sheet = doc.sheetsByIndex[1]
        await sheet.loadCells('A3:B3')
       
        const celpromo = sheet.getCell(2 ,0)       
        const celltexto = sheet.getCell(2,1)
        

        res.end(JSON.stringify({
            showCupon : celpromo.value === 'VERDADEIRO',
            message : celltexto.value
        }))
    }catch(err){
        res.end(JSON.stringify({
            showCupon : false,
            message :    ''    
       }))
    }
    
}