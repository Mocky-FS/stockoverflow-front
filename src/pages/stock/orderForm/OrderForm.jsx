import { Title, NumberInput, Button, Text } from '@tremor/react';
import React, { useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Input } from "@nextui-org/react";
import { Select, SelectItem } from "@tremor/react";
import toast from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import { keys } from '../../../../query-key-factory';
import { getCateories } from '../../../api/categories';
import { getImports } from '../../../api/imports';
import { AuthContext } from '../../../context/AuthContext';
import LoadingDots from '../../../components/LoadingDots/LoadingDots';

const OrderForm = ({
    categoriesList, 
    categoriesLoadding,
    productsList,
    productsListLoading


}) => {

    const { register, handleSubmit, watch, control, formState: { errors }, setError, reset } = useForm();


    const submitForm = (data) => {
        console.log(data)
        toast.success('Commande effectuée !')
        reset()
    }

    const filterProductBySelectedCategory = productsList?.filter((product) => product.product_category.id === watch('category'))



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
                            disabled={categoriesLoadding}
                        // errorMessage={errors.category ? 'Veuillez selectionner une catégorie' : ''}
                        >
                            {categoriesList?.map((category) => {
                                return (
                                    <SelectItem key={category.id} value={category.id} >{category.name}</SelectItem>
                                )
                            })}
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
                            disabled={productsListLoading}
                        >
                           { filterProductBySelectedCategory?.map((product) => {
                                return (
                                    <SelectItem key={product.id} value={product.id} >{product.name}</SelectItem>
                                )
                            }
                            )
                           }

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