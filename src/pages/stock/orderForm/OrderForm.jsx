import { Title, NumberInput, Button } from '@tremor/react';
import { useForm, Controller } from 'react-hook-form';
import { Select, SelectItem } from "@tremor/react";
import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createOrder } from '../../../api/imports';
import { keys } from '../../../../query-key-factory';
import { AuthContext } from '../../../context/AuthContext';
import { useContext } from 'react';


const OrderForm = ({
    categoriesList,
    categoriesLoadding,
    productsList,
    productsListLoading


}) => {

    const { handleSubmit, watch, control, formState: { errors }, reset } = useForm();

    const { user } = useContext(AuthContext)

    const queryClient = useQueryClient();

    const { mutate: newOrderMutation, isLoading } = useMutation((data) => createOrder(data), {

        onSuccess: () => {
            toast.success('Votre commande a été prise en compte !', { icon: '👍' })
            reset()
        },
        onError: () => {
            toast.error('Une erreur est survenue lors création de la commande')
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: keys.imports })
        }

    })



    const submitForm = (data) => {

        const newBody = {
            quantity: Number(data.quantity),
            product_id: Number(data.product),
            user_id: user?.id,
            date : new Date()

        }
        newOrderMutation(newBody)
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
                            disabled={watch('category') === null || productsList?.filter((product) => product.product_category.id === watch('category')).length === 0  }
                        >
                            {filterProductBySelectedCategory?.map((product) => {
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

                        />
                    )}
                />
                {errors.quantity && <span className='text-red-500 text-sm '>{errors.quantity.message}</span>}
                <Button 
                disabled={isLoading}
                type='submit' 
                className='w-1/4 m-auto mt-5 p-2'
                >Valider</Button>
            </form>
        </>
    );
};

// OrderForm.propTypes = {
//     categoriesList: PropsTypes.array.isRequired,
//     categoriesLoadding: PropsTypes.bool.isRequired,
//     productsList: PropsTypes.array.isRequired,
//     productsListLoading: PropsTypes.bool.isRequired
// }

export default OrderForm;