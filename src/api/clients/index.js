import axios from "axios";


export async function getClients() {
    
    const res = await axios({
        method: 'get',
        url: `${import.meta.env.VITE_URL}clients/`,
    })

    return res.data


}