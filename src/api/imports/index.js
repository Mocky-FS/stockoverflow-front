import axios from "axios";

export async function getImports(id) {


    try {

    
        const res = await axios({
            method: 'get',
            url: `${import.meta.env.VITE_URL}order`,
        })

        return res.data;
        

    } catch (error) {
        throw new Error(error)
    }
   
}

export async function getImportByUser(userId){
    // try {

    
    //     const res = await axios({
    //         method: 'get',
    //         url: `${import.meta.env.VITE_URL}order/${userId}`,
    //     })

    //     return res.data;
        

    // } catch (error) {
    //     throw new Error(error)
    // }
}

