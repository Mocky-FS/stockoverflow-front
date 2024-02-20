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

export async function updateStatus(data){
    
        const res = await axios({
            method: 'put',
            url: `${import.meta.env.VITE_URL}order/edit/${data.product_id}`,
            data : data
        })

        return res.data;

}

// Create a new order
export async function createOrder(data){

        const res = await axios({
            method: 'post',
            url: `${import.meta.env.VITE_URL}order/new`,
            data : data
        })

        return res.data;

}


