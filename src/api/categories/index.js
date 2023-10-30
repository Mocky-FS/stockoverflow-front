import axios from "axios";

export async function createCategory (data){

console.log(data)
    try {

        
    
        const res = await axios({
            method: 'post',
            url: `${import.meta.env.VITE_URL}product/category/new`,
            data: data
            
        })

        return res.data;
        

    } catch (error) {
        throw new Error(error)
    }

}


export async function getCateories (){

        try {
    
            
        
            const res = await axios({
                method: 'get',
                url: `${import.meta.env.VITE_URL}product/category`,
      
                
            })
    
            return res.data;
            
    
        } catch (error) {
            throw new Error(error)
        }
    
    }