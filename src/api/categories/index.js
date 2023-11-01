import axios from "axios";

export async function createCategory(data) {

        const res = await axios({
            method: 'post',
            url: `${import.meta.env.VITE_URL}product/category/new`,
            data: data

        })
        
        return res.data;
}


export async function getCateories() {

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


export async function updateCategories(body) {


    

        const res = await axios({
            method: 'post',
            url: `${import.meta.env.VITE_URL}product/category/edit/${body.category}`,
            data: body
        })

        return res.data;
}