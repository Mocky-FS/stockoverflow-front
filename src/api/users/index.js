import axios from 'axios';



export async function login(body) {


    try {

        const newBody = {
            email: body.email.toLowerCase(),
            password: body.password
        }
    
        const res = await axios({
            method: 'post',
            url: `${import.meta.env.VITE_URL}login`,
            data: newBody
        })

       
     
        return res.data;
        

    } catch (error) {
        throw error.response.data;
    }
   
}

export async function createUser(body) {

    try {
        const res = await axios({
            method: 'post',
            url: `${import.meta.env.VITE_URL}register`,
            data: body
        })
      
        return res

    } catch (error) {
        throw error.response.data;
    }

}

export async function updateUser(body) {

    try {
        const res = await axios({
            method: 'patch',
            url: `${import.meta.env.VITE_URL}users/${body.id}`,
            data: body
        })
      
        return res.data

    } catch (error) {
        throw error.response.data;
    }

}

export async function deleteUser(id) {

    try {
        const res = await axios({
            method: 'delete',
            url: `${import.meta.env.VITE_URL}users/${id}`,
        })
      
        return res.data

    } catch (error) {
        throw error.response.data;
    }

}

export async function getUsers(id) {
    
    let url = `${import.meta.env.VITE_URL}users`

    if (id) {
        url += `/${id}`
    }


    try {
        const res = await axios({
            method: 'get',
            url: url,
        })
      
        return res.data

    } catch (error) {

        throw error.response.data;
    }

}

