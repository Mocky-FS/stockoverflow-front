import { useContext, useState } from 'react';
import { Controller, useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom';
import { Button, Card, Flex, Text, TextInput, Title } from '@tremor/react';
import { toast } from 'react-toastify';
import './login.scss'
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import { getExpirationTime } from '../../utils/functions';
import { login } from '../../api';

import Eye from '../../assets/icons/eye.svg?react'
import Email from '../../assets/icons/email.svg?react'

import EyeSlash from '../../assets/icons/eyeSlash.svg?react'


const Login = () => {

    const { setUser, user } = useContext(AuthContext)

    const { register, reset, handleSubmit, watch, formState: { errors }, setError, control } = useForm();

    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false);


    // const { mutate : loginMutate} = useMutation((data) => console.log('in'), {

    //     onSuccess : (data) => {

    //         // axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`

    //         // setUser({
    //         //     isLogged : true,
    //         //     firstname : data.firstname,
    //         //     lastname : data.lastname,
    //         //     email : data.email,
    //         //     id : data.id,
    //         //     token : data.token,
    //         //     tokenExpiration : getExpirationTime(data.tokenExpiration),
    //         //     isAdmin : data.isAdmin
    //         // })

    //         // localStorage.setItem('user', JSON.stringify({
    //         //     ...data,
    //         //     tokenExpiration : getExpirationTime(data.tokenExpiration),
    //         //     isLogged : true,
    //         //     isAdmin : data.isAdmin

    //         // }))

    //         // navigate('/dashboard')
    //         // toast.success(`Bonjour ${data.firstname} !}`)
    //         navigate('/dashboard')
    //         toast.success(`Bonjour ${data.firstname} !}`)


    //     },

    //     onError : (error) => {
    //         console.log(error)
    //         toast.error('Une erreur est survenue')
    //     },




    // })

    const onSubmit = () => {
        toast.success(`Bonjour ${user.firstname} !`)
        navigate('/dashboard')
    }


    return (
     
        <Card className='h-full !rounded-none flex items-center justify-center'>
            <Card decoration='top' className='w-96' >
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 w-full'>
                    <Title className='text-center text-2xl italic'>Stock' Overflow</Title>
                    <Text className='self-center text-xl'>Connexion</Text>
                    <Text>Email</Text>
                  
                            <TextInput
                                {...register('email', {  required: `Merci de saisir votre adresse mail`,
                                    pattern: {
                                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: 'Merci de saisir un email valide',
                                    } })}
                                type="email"
                                placeholder="Adresse mail"
                                error={errors.email}
                                autoFocus={true}
                                maxLength={50}
                                icon={Email}
                            />
                       
                    {errors.email && <span className='text-red-500 text-sm '>{errors.email.message}</span>}
                    <Text className='flex items-center gap-4'>Mot de passe
                        {/* <button
                            type='button'
                            onClick={() => setShowPassword(!showPassword)}>
                            {!showPassword ? <Eye className='w-5' /> : <EyeSlash className='w-5' />}
                        </button> */}
                    </Text>
             
                            <TextInput
                                {...register('password', { 
                                    required: `Merci de saisir votre mot de passe` })}
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Votre mot de passe"
                                error={errors.password}
                                icon={showPassword ? Eye : EyeSlash}
                                
                            />
                      
                    {errors.password && <span className='text-red-500 text-sm '>{errors.password.message}</span>}
                    <Button type='submit' className='w-fit self-center' >Se connecter</Button>
                    <Flex className='flex flex-col gap-6 mt-5'>
                        <Text><Link to={'/register'}>Pas encore de compte ?</Link></Text>
                        <Text className='cursor-not-allowed'>Mot de passe oublié ?</Text>
                    </Flex>
                </form>
            </Card>





        </Card>

    );
};

export default Login;