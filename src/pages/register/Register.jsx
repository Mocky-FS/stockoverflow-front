import { Button } from '@tremor/react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import './register.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { faCircleXmark, faXmark } from '@fortawesome/free-solid-svg-icons';

const Register = ({ closeModal = false }) => {

    const { register, handleSubmit, watch, formState: { errors }, setError } = useForm();

    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (data) => {

        console.log(data)

    }

    return (
        <div style={{ padding : '1rem', display : 'flex', flexDirection : 'column', gap : '1rem'}}>

            {
                closeModal &&
                <button className='close-modal' onClick={closeModal}>
                   <FontAwesomeIcon icon={faXmark} size='lg'/>
                </button>

            }
            <form className='register-form' onSubmit={handleSubmit(onSubmit)}>
                <h2 className='title'>{ closeModal ? `Créer un utilisateur` : "Formulaire d'inscription"}</h2>
                <label htmlFor="lastname">Nom</label>
                <input
                    style={{ border: errors.lastname && '1px solid red' }}
                    type="text"
                    placeholder='Nom'
                    {...register("lastname",
                        { required: true, minLength: 4 }
                    )}
                />
                <label htmlFor="firstname">Prénom</label>
                <input
                    style={{ border: errors.firstname && '1px solid red' }}
                    type="text"
                    placeholder='Prénom'
                    {...register("firstname",
                        { required: true, minLength: 4 }
                    )}
                />
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
                            minLength: {
                                value: 8,
                                message: 'Le mot de passe doit contenir au moins 8 caractères'
                            }

                        })}
                />
                {errors.password && <span className='error'>{errors.password.message}</span>}
                <label htmlFor="confirmPassword">Confirmer mot de passe</label>
                <input
                    style={{ border: errors.confirmPassword && '1px solid red' }}
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Confirmer mot de passe'
                    {...register("confirmPassword",
                        {
                            required: true,
                            validate: (value) => value === watch('password') || 'Le mots de passe ne correspond pas'
                        })}
                />
                {errors.confirmPassword && <span className='error'>{errors.confirmPassword.message}</span>}

                <Button type='submit' className='register-btn' >{ closeModal ? 'Créer' : 'Login'}</Button>
            </form>
        </div>

    );
};

export default Register;