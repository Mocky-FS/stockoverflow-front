import { Button, NumberInput, Select, SelectItem, Text, TextInput, Title } from '@tremor/react';
import React, { useEffect } from 'react';
import { keys } from '../../../../query-key-factory';
import { getProducts } from '../../../api/products';
import { useQuery } from '@tanstack/react-query';
import { Controller, useForm } from 'react-hook-form';

const UpdateProduct = ({index}) => {

    const { register, handleSubmit, watch, control, formState: { errors }, setError, reset } = useForm();

    const { data: productsList, isLoading: productsLoading } = useQuery(
        keys.products({}),
        () => getProducts(),


       
    )

    const onSubmit = (data) => {
        console.log(data)
    }

    useEffect(() => {
        reset()
    }, [index, reset])


    return (
       
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 mt-10 w-full'>
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

                <Controller
                    control={control}
                    name='product'
                    defaultValue={null}
                    rules={{ required: 'Veuillez selectionner un produit' }}
                    render={({ field }) => (
                        <Select
                            {...field}
                            placeholder="Selectionner un produit"
                            enableClear={false}
                        >
                            <SelectItem value="1" >Xbox Series</SelectItem>
                            <SelectItem value="2" >PlayStation 5</SelectItem>
                            <SelectItem value="3" >PC</SelectItem>
                            <SelectItem value="4" >Nitendo Switch</SelectItem>


                        </Select>
                    )}
                />
                {errors.product && <span className='text-red-500 text-xs '>{errors.product.message}</span>}

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
               
                {errors.quantity && <span className='text-red-500 text-xs '>{errors.quantity.message}</span>}
               

                <Button type='submit' className='w-fit self-center'>Modifier</Button>
            </form>

    );
};

export default UpdateProduct;