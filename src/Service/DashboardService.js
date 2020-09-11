import  Axios from 'axios'

export const searchCustomers = async page=>{
    try{
        let response = await Axios.get(`http://localhost:3005/api/customers?page=${page}`)
        console.log(response)
        return response.data
    }catch(err){
        console.log(err)

    }

    
}