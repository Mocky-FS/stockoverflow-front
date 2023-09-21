import axios from 'axios';


export async function login(body) {

    const newBody  = {
        email: body.email.toLowerCase(),
        password: body.password
    }

    const res = await axios({
        method: 'post',
        url: `${import.meta.env.VITE_URL}/login`,
        data: newBody
    })

    return res.data;
}