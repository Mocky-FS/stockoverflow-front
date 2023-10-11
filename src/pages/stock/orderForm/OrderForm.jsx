import { Title, NumberInput, Button, Text } from '@tremor/react';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Input } from "@nextui-org/react";
import { Select, SelectItem } from "@tremor/react";

const OrderForm = () => {

    const { register, handleSubmit, watch, control, formState: { errors }, setError, reset } = useForm();


    const submitForm = (data) => {
        console.log(data)
        toast.success('Commande effectuée !')
        reset()
    }

    const options = [
        { label: 'Chocolate', value: 'chocolate', },
        { label: 'Strawberry', value: 'strawberry', },
        { label: 'Strawberry', value: 'Apple' },

    ]


    return (
        <>
            <Title className='self-start'>Commander des articles </Title>
            <span className='text-red-500 text-sm mt-5'>* Toute commande devra être validée par un administrateur </span>

            <form onSubmit={handleSubmit(submitForm)} className='flex flex-col gap-4 mt-10 w-2/3 '>
                <Controller
                    control={control}
                    name='category'
                    defaultValue={null}
                    rules={{ required: 'Veuillez selectionner une catégorie' }}
                    render={({ field }) => (
                        <Select
                            {...field}
                            label="Catégorie"
                            placeholder="Selectionner une catégorie"
                            className=" w-full text-tremor-content dark:text-dark-tremor-content-muted "
                            enableClear={false}
                        // errorMessage={errors.category ? 'Veuillez selectionner une catégorie' : ''}
                        >
                            <SelectItem value="1" >Papiers</SelectItem>
                            <SelectItem value="2" >Feuilles</SelectItem>
                            <SelectItem value="3" >Divers</SelectItem>
                        </Select>

                    )}



                />
                {errors.category && <span className='text-red-500 text-sm '>{errors.category.message}</span>}

                <Controller
                    control={control}
                    name='product'
                    defaultValue={null}
                    rules={{ required: 'Veuillez selectionner un produit' }}
                    render={({ field }) => (
                        <Select
                            {...field}
                            label="Produit"
                            placeholder="Selectionnez un produit"
                            className=" w-full text-tremor-content dark:text-dark-tremor-content-muted "
                            enableClear={false}
                        >
                            <SelectItem value="1">Feuille A4</SelectItem>
                            <SelectItem value="2">Feuille A3</SelectItem>
                            <SelectItem value="3">Papier Bulle</SelectItem>

                        </Select>
                    )}
                />
                {errors.product && <span className='text-red-500 text-sm '>{errors.product.message}</span>}
                <Controller
                    control={control}
                    name='quantity'
                    defaultValue={''}
                    rules={{ required: 'Veuillez saisir une quantité' }}
                    render={({ field }) => (
                        <NumberInput
                            {...field}
                            className=" text-tremor-content dark:text-dark-tremor-content-muted w-full "
                            type="number"
                            placeholder='Quantité'
                            min={0}
                            // error={errors.quantity}

                        />
                    )}
                />
                {errors.quantity && <span className='text-red-500 text-sm '>{errors.quantity.message}</span>}
                <Button type='submit' className='w-1/4 m-auto mt-5 p-2'>Valider</Button>
            </form>
        </>
    );
};

export default OrderForm;