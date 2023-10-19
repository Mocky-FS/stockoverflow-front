import { Button, TextInput, Title } from '@tremor/react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { createUser } from '../../../api/users';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { keys } from '../../../../query-key-factory';

const AdminCreateUser = () => {


    const {
        register,
        watch,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();


    const queryClient = useQueryClient();



    const { mutate: addUserMutation } = useMutation((data) => createUser(data), {

        onMutate: async () => {
            // await queryClient.cancelQueries(keys.users({}))
            // const previousUsers = queryClient.getQueryData(keys.users({}))
            // queryClient.setQueryData(keys.users({}), (old) => [...old, data])
            // return { previousUsers }

           
        },

        onSuccess: () => {
                toast.success('Utilisateur créé avec succès')
                reset()
        },
        onError: () => {
            toast.error('Une erreur est survenue lors de la création')
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: keys.users })


        }

    })





    const onSubmit = async (data) => {

        addUserMutation(data)

        //     try {
        //     const response = await createUser(data)


        //     if (response.status === 201) {
        //       toast.success("L'utilisateur a bien été créé")        
        //       reset() 
        //     }

        //   } catch (error) {

        //     if (error.code === 409 && error.message === `L'adresse e-mail existe déjà`) {
        //       return setError('email', { type: 'manual', message: 'L\'adresse e-mail existe déjà' });
        //     } else {
        //       alert('Une erreur est survenue, merci de réessayer')
        //     }

        //   }



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
                        type="email"
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