import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Button, NumberInput, Select, SelectItem, TextInput, Title } from '@tremor/react';
import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { createCategory } from '../../../api/categories';

const AddCategory = ({index}) => {
    const { register, handleSubmit, watch, control, formState: { errors }, setError, reset } = useForm();

    const queryClient = useQueryClient();

    const { mutate: addCategory } = useMutation((data) => createCategory(data), {

        onMutate: async () => {
            // await queryClient.cancelQueries(keys.users({}))
            // const previousUsers = queryClient.getQueryData(keys.users({}))
            // queryClient.setQueryData(keys.users({}), (old) => [...old, data])
            // return { previousUsers }

           
        },

        onSuccess: () => {
                toast.success('La catégorie a été ajoutée avec succès')
                reset()
        },
        onError: () => {
            toast.error('Une erreur est survenue lors de la création')
        },
        onSettled: () => {
            // queryClient.invalidateQueries({ queryKey: keys.products })


        }

    })



    const onSubmit = (data) => {
        addCategory(data)
    }

    useEffect(() => {
        reset()
    }, [index, reset])
    
    return (
        <div className='mt-8 flex flex-col items-center'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 mt-10 w-full '>

                <TextInput
                    type="text"
                    placeholder="Nom de la catégorie ( ex : PS4 Xbox one )"
                    error={errors.name}
                    {...register("name", {
                        required: "Merci d'indiquer un nom de catégorie",
                    })}
                />
                {errors.name && (<span className="text-red-500 text-sm "> {errors.name.message} </span>)}

              

                <Button type='submit' className='w-fit self-center'>Ajouter</Button>
            </form>
        </div>
    );
};

export default AddCategory;