import axios from "axios";


export async function getProducts(id) {
    
    // let url = 

    // if (id) {
    //     url += `/${id}`
    // }

// console.log(`${import.meta.env.VITE_URL}product`)

const res = await axios({
    method: 'get',
    url: `https://sheltered-retreat-89251-a26162480c09.herokuapp.com/product`,
})

return res.data
    // try {
       

    // } catch (error) {

    //     throw error.response.data;
    // }

}
