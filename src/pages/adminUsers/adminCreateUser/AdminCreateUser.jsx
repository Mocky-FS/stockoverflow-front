import { Button, TextInput, Title } from '@tremor/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AdminCreateUser = () => {

    const {
        register,
        watch,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();


    const onSubmit = (data) => {
        console.log(data)
        reset()
        toast.success('Utilisateur crée')

    };

    return (
        <>
            <Title>Créer un utilisateur</Title>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 h-full mt-5">
                <div className='flex flex-col gap-2'>
                    <TextInput
                        type="text"
                        placeholder="Nom"
                        error={errors.lastname}
                        {...register("lastname", {
                            required: "Merci d'indiquer le nom",
                        })}
                    />
                    {errors.lastname && (
                        <span className="text-red-500 text-sm ">
                            {errors.lastname.message}
                        </span>
                    )}
                </div>
                <div>


                    <TextInput
                        type="text"
                        placeholder="Prénom"
                        error={errors.firstname}
                        {...register("firstname", {
                            required: "Merci d'indiquer le prénom",
                        })}
                    />
                    {errors.firstname && (
                        <span className="text-red-500 text-sm ">
                            {errors.firstname.message}
                        </span>
                    )}
                </div>
                <div>
                    <TextInput
                        type="text"
                        placeholder="Email"
                        error={errors.email}
                        {...register("email", {
                            required: "Merci d'indiquer l'email",
                            pattern: {
                                value:
                                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: "Merci de saisir une adresse mail valide",
                            },
                        })}
                    />
                    {errors.email && (
                        <span className="text-red-500 text-sm ">
                            {errors.email.message}
                        </span>
                    )}
                </div>
                <div>


                    <TextInput
                        type="password"
                        placeholder="Mot de passe"
                        error={errors.password}
                        {...register("password", {
                            required: "Merci de saisir un mot de passe",
                        })}
                    />
                    {errors.password && (
                        <span className="text-red-500 text-sm ">
                            {errors.password.message}
                        </span>
                    )}
                </div>
                <div>
                    <TextInput
                        type="password"
                        placeholder="Confirmer le mot de passe"
                        error={errors.confirmPassword}
                        {...register("confirmPassword", {
                            required: "Merci de saisir un mot de passe",
                            validate: (value) =>
                                value === watch("password") ||
                                "Le mot de passe ne correspond pas",
                        })}
                    />
                    {errors.confirmPassword && (
                        <span className="text-red-500 text-sm ">
                            {errors.confirmPassword.message}
                        </span>
                    )}
                </div>
                <Button className="w-fit self-center mt-2" type="submit"> Créer</Button>


            </form>
        </>

    );
};

export default AdminCreateUser;