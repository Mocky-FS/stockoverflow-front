import axios from "axios";

export async function getImports() {


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

// /order/id

export async function updateStatus(data){

    console.log(data)

   

        const res = await axios({
            method: 'put',
            url: `${import.meta.env.VITE_URL}order/edit/${data.product_id}`,
            data : data
        })

        return res.data;

}

