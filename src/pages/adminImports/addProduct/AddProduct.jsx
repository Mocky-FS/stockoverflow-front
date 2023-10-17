import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Button, NumberInput, Select, SelectItem, Text, TextInput, Title } from '@tremor/react';
import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { addProduct } from '../../../api/products';
import { toast } from 'react-toastify';
import { keys } from '../../../../query-key-factory';

const AddProduct = ({index}) => {

    const { register, handleSubmit, watch, control, formState: { errors }, setError, reset } = useForm();


    const queryClient = useQueryClient();
    const { mutate: addProductMutation } = useMutation((data) => addProduct(data), {

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
            queryClient.invalidateQueries({ queryKey: keys.products })


        }

    })

    const onSubmit = (data) => {
        addProductMutation(data)
    }

    useEffect(() => {
        reset()
    }, [index, reset])

    return (
        <div className='mt-5 flex flex-col items-center'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 mt-2 w-3/4 '>
                <Controller
                    control={control}
                    name='category'
                    defaultValue={null}
                    rules={{ required: 'Veuillez selectionner une catégorie' }}
                    render={({ field }) => (
                        <Select
                            {...field}
                            placeholder="Selectionner une catégorie"
                            enableClear={false}
                        >
                            <SelectItem value="1" >Xbox Series</SelectItem>
                            <SelectItem value="2" >PlayStation 5</SelectItem>
                            <SelectItem value="3" >PC</SelectItem>
                            <SelectItem value="4" >Nitendo Switch</SelectItem>


                        </Select>
                    )}
                />
                {errors.category && <span className='text-red-500 text-xs '>{errors.category.message}</span>}

                <TextInput
                    type="text"
                    placeholder="Nom du produit"
                    {...register("name", {
                        required: "Merci d'indiquer un nom de produit",
                    })}
                />
                {errors.name && (<span className="text-red-500 text-xs "> {errors.name.message} </span>)}

                <TextInput
                    type="text"
                    placeholder="Courte description"
                    {...register("description", {
                        required: "Merci d'indiquer une courte description",
                    })}
                />
                {errors.description && (<span className="text-red-500 text-xs "> {errors.description.message} </span>)}
                <Controller
                    control={control}
                    name='price'
                    defaultValue={''}
                    rules={{ required: 'Veuillez indiquer un prix' }}
                    render={({ field }) => (
                        <NumberInput
                            {...field}
                            type="number"
                            placeholder='Prix en euros'
                            min={0}

                        />
                    )}
                />
                
                {errors.price && <span className='text-red-500 text-xs '>{errors.price.message}</span>}
                <Controller
                    control={control}
                    name='quantity'
                    defaultValue={''}
                    render={({ field }) => (
                        <NumberInput
                            {...field}
                            type="number"
                            placeholder='Quantité'
                            min={0}

                        />
                    )}
                />
                <Text className='!text-red-500 text-xs '>Saisir quantité si le produit est déja reçu</Text>
                {errors.quantity && <span className='text-red-500 text-xs '>{errors.quantity.message}</span>}
               

                <Button type='submit' className='w-fit self-center'>Ajouter</Button>
            </form>
        </div>
    );
};

export default AddProduct;