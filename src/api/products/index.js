import axios from "axios";


export async function getProducts(id) {
    
    // let url = 

    // if (id) {
    //     url += `/${id}`
    // }

// console.log(`${import.meta.env.VITE_URL}product`)

const res = await axios({
    method: 'get',
    url: `https://sheltered-retreat-89251-a26162480c09.herokuapp.com/product/`,
})

return res.data
    // try {
       

    // } catch (error) {

    //     throw error.response.data;
    // }

}


export async function addProduct(body) {

    const newBody = {
        name: body.name,
        price: +body.price,
        description: body.description,
        image: body.image,
        product_category: body.category,
        isActive : body.quantity > 0 ? true : false,
        quantity: +body.quantity,
    }
    

    // console.log(body)

    try {

        const res = await axios({
            method: 'post',
            url: `${import.meta.env.VITE_URL}product/new-products`,
            data  : newBody
        })
        
        return res.data

    } catch (error) {

        throw new Error(error)
    }


}

export async function updateProducts(body) {

    const newBody = {
        product_category: body.category,
        id : body.product,
    }

    if (body.price){
        newBody.price = +body.price
    }

    if (body.quantity){
        newBody.quantity = +body.quantity
    }
    
        const res = await axios({
            method: 'post',
            url: `${import.meta.env.VITE_URL}product/edit/${newBody.id}`,
            data  : newBody
        })
        
        return res.data

}

