import axios from "axios";

export async function getCategories (id){

    try {

        
    
        const res = await axios({
            method: 'post',
            url: `${import.meta.env.VITE_URL}api/login`,
            
        })

        return res.data;
        

    } catch (error) {
        throw new Error(error)
    }

}