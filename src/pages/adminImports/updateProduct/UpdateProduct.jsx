import { Button, NumberInput, Select, SelectItem, TextInput } from '@tremor/react';
import { useEffect } from 'react';
import { keys } from '../../../../query-key-factory';
import { updateProducts } from '../../../api/products';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const UpdateProduct = ({index, productsList, categoriesList}) => {

    const { register, handleSubmit, control, formState: { errors }, reset } = useForm();

    const queryClient = useQueryClient();


    const { mutate: updateMutation } = useMutation((data) => updateProducts(data), {

        onSuccess: () => {
            toast.success(`Le produit a bien été modifié`, {
                icon: '👏',
            })
            reset()
        },
        onError: () => {
            toast.error('Une erreur est survenue lors de mise à jour du produit')
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: keys.products })
        }

    })



    const onSubmit = (data) => {
       
        const newData = Object.keys(data).reduce((acc, key) => {
            if (data[key] !== '') {
                acc[key] = data[key]
            }
            return acc
        }, {})

        updateMutation(newData)

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
                            {categoriesList?.map((category) => {
                                return (
                                    <SelectItem key={category.id} value={category.id} >{category.name}</SelectItem>
                                )
                            })}


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
                            {productsList?.map((product) => {
                                return (
                                    <SelectItem key={product.id} value={product.id} >{product.name}</SelectItem>
                                )

                            })
                            }


                        </Select>
                    )}
                />
                {errors.product && <span className='text-red-500 text-xs '>{errors.product.message}</span>}

                <TextInput
                    type="text"
                    placeholder="Nom du produit"
                    {...register("name", {
                        // required: "Merci d'indiquer un nom de produit",
                    })}
                />
                {errors.name && (<span className="text-red-500 text-xs "> {errors.name.message} </span>)}

                <TextInput
                    type="text"
                    placeholder="Courte description"
                    {...register("description", {
                        // required: "Merci d'indiquer une courte description",
                    })}
                />
                {errors.description && (<span className="text-red-500 text-xs "> {errors.description.message} </span>)}
                <Controller
                    control={control}
                    name='price'
                    defaultValue={''}
                    // rules={{ required: 'Veuillez indiquer un prix' }}
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