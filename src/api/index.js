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

    const token = res.data.token

    // decode the token to get user id

    // create a function to decode jwt and get user id
    // const userId = decodeToken(token)






    if (token){

        const userInfos = await getUserInfos()
        const user = userInfos.data
        user.token = token

        
    }

    return res.data;
}


export async function getUserInfos (){
    const res = await axios({
        method: 'get',
        url: `http://localhost:8080/user/1`,
        
    
    })

    return res
}