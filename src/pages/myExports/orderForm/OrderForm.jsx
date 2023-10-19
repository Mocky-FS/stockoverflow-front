import { NumberInput, Select, SelectItem, Text, Title, Button, Card } from '@tremor/react';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
const OrderForm = () => {


    const { register, handleSubmit, watch, control, formState: { errors }, setError, reset } = useForm();




    const sendOrder = (data) => {

        
        if (window.confirm('Etes-vous sûr de vouloir expédier cette commande ?')) {
            console.log(data)
            reset()
            toast.success('Commande expédiée avec succès')
        }

    }
    return (
        <Card className='w-2/4 overflow-auto  '  >
            <Title>Expédier une commande</Title>
            <form className='mt-5 flex flex-col   w-full self-center gap-4' onSubmit={handleSubmit(sendOrder)} >
            <div className='flex flex-col gap-1'>
                    <Controller
                        control={control}
                        name='client'
                        rules={{ required: 'Veuillez selectionner un client' }}
                        defaultValue={null}
                        render={({ field }) => (

                            <Select
                                {...field}
                                label="client"
                                placeholder="Client"
                                enableClear={false}
                            >
                                <SelectItem value="1" className='text-tremor-content dark:text-dark-tremor-content-muted '>Oclock</SelectItem>
                                <SelectItem value="2" className='text-tremor-content dark:text-dark-tremor-content-muted '>CFA</SelectItem>
                            </Select>

                        )}
                    />
                    {errors.client && <span className='text-red-500 text-xs ml-2'>{errors.client.message}</span>}
                </div>
                <div className='flex flex-col gap-1'>
                    <Controller
                        control={control}
                        name='category'
                        defaultValue={null}
                        rules={{ required: 'Veuillez selectionner une catégorie' }}
                        render={({ field }) => (
                            <Select
                                {...field}
                                label="category"
                                placeholder="Catégorie"
                                enableClear={false}

                            >

                                <SelectItem value="1" className='text-tremor-content dark:text-dark-tremor-content-muted '>Feuilles</SelectItem>
                                <SelectItem value="2" className='text-tremor-content dark:text-dark-tremor-content-muted '>Papier</SelectItem>
                                <SelectItem value="3" className='text-tremor-content dark:text-dark-tremor-content-muted '>Carton</SelectItem>

                            </Select>
                        )}
                    />
                    {errors.category && <span className='text-red-500 text-xs ml-2'>{errors.category.message}</span>}
                </div>
                <div className='flex flex-col gap-1'>
                    <Controller
                        control={control}
                        name='product'
                        defaultValue={null}
                        rules={{ required: 'Veuillez selectionner un produit' }}
                        render={({ field }) => (
                            <Select
                                {...field}
                                label="product"
                                placeholder="Produit"
                            >

                                <SelectItem value="1" className='text-tremor-content dark:text-dark-tremor-content-muted '>Feuilles A4</SelectItem>
                                <SelectItem value="2" className='text-tremor-content dark:text-dark-tremor-content-muted '>Feuilles 13</SelectItem>
                                <SelectItem value="3" className='text-tremor-content dark:text-dark-tremor-content-muted '>Papier carton</SelectItem>

                            </Select>
                        )}
                    />
                    {errors.product && <span className='text-red-500 text-xs ml-2 '>{errors.product.message}</span>}
                </div>
                <div className='flex flex-col gap-1'>
                    <Controller
                        control={control}
                        name='quantity'
                        defaultValue={''}
                        rules={{ required: 'Veuillez saisir une quantité' }}
                        render={({ field }) => (
                            <NumberInput
                                {...field}
                                placeholder='Quantité'
                                min={0}
                            />
                        )}
                    />
                    {errors.quantity && <span className='text-red-500 text-xs ml-2 '>{errors.quantity.message}</span>}
                </div>
                <Button type='submit' className='w-fit self-center  p-2 mt-2' >Expédier</Button>
            </form>
        </Card>
    );
};

export default OrderForm;