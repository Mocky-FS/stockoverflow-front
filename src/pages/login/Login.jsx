import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useState } from 'react';
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@tremor/react';
import { toast } from 'react-toastify';
import './login.scss'
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import { getExpirationTime } from '../../utils/functions';
import { login } from '../../api';


const Login = () => {

    const { setUser } = useContext(AuthContext)

    const { register, reset, handleSubmit, watch, formState: { errors }, setError } = useForm();

    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false);


    const { mutate : loginMutate} = useMutation((data) => console.log('in'), {

        onSuccess : (data) => {

            // axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`

            // setUser({
            //     isLogged : true,
            //     firstname : data.firstname,
            //     lastname : data.lastname,
            //     email : data.email,
            //     id : data.id,
            //     token : data.token,
            //     tokenExpiration : getExpirationTime(data.tokenExpiration),
            //     isAdmin : data.isAdmin
            // })

            // localStorage.setItem('user', JSON.stringify({
            //     ...data,
            //     tokenExpiration : getExpirationTime(data.tokenExpiration),
            //     isLogged : true,
            //     isAdmin : data.isAdmin

            // }))

            // navigate('/dashboard')
            // toast.success(`Bonjour ${data.firstname} !}`)
            navigate('/dashboard')
            toast.success(`Bonjour ${data.firstname} !}`)


        },

        onError : (error) => {
            console.log(error)
            toast.error('Une erreur est survenue')
        },




    })


    return (
        <div className='login'>

            <form className='login-form' onSubmit={handleSubmit(loginMutate)}>

                <h2 className='title'>Se connecter</h2>
                <label htmlFor="email">Email</label>
                <input
                    style={{ border: errors.email && '1px solid red' }}
                    type="email"
                    placeholder='Adresse mail'
                    {...register("email", {
                        required: true,
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: 'Merci de saisir une adresse mail valide',
                        }
                    }
                    )}
                />
                {errors.email?.message && <span className='error'>{errors.email.message}</span>}


                <label htmlFor="password" className='eyes'>Mot de passe
                    <button
                        type='button'
                        onClick={() => setShowPassword(!showPassword)}
                        className='eye-button'>
                        {showPassword ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
                    </button>
                </label>
                <input
                    style={{ border: errors.password && '1px solid red' }}
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Mot de passe'
                    {...register("password",
                        {
                            required: true,
                        })}
                />
                {errors.password?.message && <span className='error'>{errors.password.message}</span>}


                {/* <p className='forgot'>Mot de passe oublié ?</p> */}

                <Button type='submit' className='login-btn'>Connexion</Button>
                <Link to='/register' className='link-register'>Pas encore de compte ?</Link>
            </form>

        </div>

    );
};

export default Login;