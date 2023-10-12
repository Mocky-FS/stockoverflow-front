import { useContext, useState } from 'react';
import { Controller, useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom';
import { Button, Card, Flex, Text, TextInput, Title } from '@tremor/react';
import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';
import { AuthContext } from '../../context/AuthContext';
import { login } from '../../api/users/index';
import Email from '../../assets/icons/email.svg?react'
import { getExpirationTime } from '../../utils/token';



const Login = () => {

    const { setUser, user } = useContext(AuthContext)

    const { register, reset, handleSubmit, watch, formState: { errors }, setError, control } = useForm();

    const navigate = useNavigate()



    const { mutate : loginMutate} = useMutation((data) => login(data), {

        onSuccess : (data) => {

            // axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`

            setUser({
                isLogged : true,
                firstname : data.firstname,
                lastname : data.lastname,
                email : data.email,
                id : data.id,
                token : data.token,
                tokenExpiration : getExpirationTime(data.token),
            })

            localStorage.setItem('user', JSON.stringify({
                ...data,
                tokenExpiration : getExpirationTime(data.token),
              


            }))
            reset()

            const hour = new Date().getHours()
            
            if (hour >= 20 || hour <= 6) {
                toast(`Bonsoir ${data.firstname} !`)
            } else {
                toast(`Bonjour ${data.firstname} !`)
            }
            navigate('/dashboard')
        
        },

        onError : (error) => {
            if (error.code === 401 ) {
                setError('email', { type: 'manual', message: 'Identifiants incorrects' })
                 setError('password', { type: 'manual', message: 'Identifiants incorrects' })
            } else {
                // alert('Une erreur est survenue, merci de réessayer')
            }
        },




    })

    const onSubmit = (data) => {
        // toast.success(`Bonjour ${user.firstname} !`)
        // navigate('/dashboard')
        loginMutate(data)
    }

    return (

        <Card className='h-full !rounded-none flex items-center justify-center'>
            <Card decoration='top' className='w-96' >
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 w-full'>
                    <Title className='text-center text-2xl italic'>Stock' Overflow</Title>
                    <Text className='self-center text-xl'>Connexion</Text>
                    <Text>Adresse email</Text>

                    <TextInput
                        {...register('email', {
                            required: `Merci de saisir votre adresse mail`,
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Merci de saisir un email valide',
                            }
                        })}
                        type="email"
                        placeholder="votre email"
                        error={errors.email}
                        autoFocus={true}
                        maxLength={50}
                        // icon={Email}
                    />

                    {errors.email && <span className='text-red-500 text-sm '>{errors.email.message}</span>}
                    <Text className='flex items-center gap-4'>Mot de passe </Text>
                    <TextInput
                        {...register('password', {
                            required: `Merci de saisir votre mot de passe`
                        })}
                        type='password'
                        placeholder="Votre mot de passe"
                        error={errors.password}

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