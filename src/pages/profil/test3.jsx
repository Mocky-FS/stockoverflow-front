import { useForm } from 'react-hook-form';
import { useState } from 'react';

function Form() {
    
    const [showPassword, setShowPassword] = useState(false);

  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    watch 
  } = useForm();

  const onSubmit = (data) => {
    // faire quelque chose avec les données 
    console.log(data);
  };
  return (
<form className='register-form' onSubmit={handleSubmit(onSubmit)}>
    <h2 className='title'>{ closeModal ? "Créer un utilisateur" : "Formulaire d'inscription"} </h2>
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
  )
}
