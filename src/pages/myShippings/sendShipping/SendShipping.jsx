import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './sendShipping.scss';
import Select from 'react-select';
import { Button, NumberInput } from "@tremor/react";
import { toast } from 'react-toastify';
import { Controller, useForm } from 'react-hook-form';


const SendShipping = ({ closeModal }) => {

    const { register, handleSubmit, watch, control, formState: { errors }, setError } = useForm();


    const send = (data) => {

        if (window.confirm('Etes-vous sûr de vouloir expédier cette commande ?')) {
            toast.success('Commande expédiée !')
            closeModal()
            console.log(data)
        }

    }

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'Apple', label: 'Apple' },

    ]



    return (
        <div className='send-shipping'>
            <div className='top'>
                <h2 className='title'>Expédier une commande</h2>
                <button><FontAwesomeIcon icon={faXmark} size='lg' onClick={() => closeModal()} /></button>
            </div>
            <div className='content'>
                <form className='send-shipping-form' onSubmit={handleSubmit(send)} >
                    <label>
                        Client
                        <Controller
                            control={control}
                            name='client'
                            defaultValue={null}
                            rules={{ required: 'Veuillez selectionner un client' }}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    placeholder='Sélectionnez un client'
                                    options={options}
                                    isSearchable={false}
                                    styles={{
                                        control: (baseStyles, state) => ({
                                            ...baseStyles,
                                            borderColor: errors.client ? 'red' : '',
                                        }),
                                    }}
                                />
                            )}
                        />
                        {errors.client && <span className='error'>{errors.client.message}</span>}
                    </label>
                    <label>
                        Catégorie
                        <Controller
                            control={control}
                            name='category'
                            defaultValue={null}
                            rules={{ required: 'Veuillez selectionner une catégorie' }}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    placeholder='Sélectionnez une catégorie'
                                    options={options}
                                    isSearchable={false}
                                    styles={{
                                        control: (baseStyles, state) => ({
                                            ...baseStyles,
                                            borderColor: errors.category ? 'red' : '',
                                        }),
                                    }}
                                />
                            )}
                        />
                        {errors.category && <span className='error'>{errors.category.message}</span>}
                    </label>
                    <label>
                        Produit
                        <Controller
                            control={control}
                            name='product'
                            defaultValue={null}
                            rules={{ required: 'Veuillez selectionner un produit' }}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    placeholder='Sélectionnez un produit'
                                    options={options}
                                    isSearchable={false}
                                    styles={{
                                        control: (baseStyles, state) => ({
                                            ...baseStyles,
                                            borderColor: errors.product ? 'red' : '',
                                        }),
                                    }}
                                />
                            )}
                        />
                        {errors.product && <span className='error'>{errors.product.message}</span>}
                    </label>
                    <label>
                        Quantité
                        <Controller
                            control={control}
                            name='quantity'
                            defaultValue={''}
                            rules={{ required: 'Veuillez saisir une quantité' }}
                            render={({ field }) => (
                                <NumberInput
                                    {...field}
                                    placeholder='Selectionner une quantité'
                                    min={0}
                                    error={errors.quantity}

                                />
                            )}
                        />
                        {errors.quantity && <span className='error'>{errors.quantity.message}</span>}
                    </label>
                    <Button type='submit'>Envoyer</Button>
                </form>
            </div>
        </div>
    );
};

export default SendShipping;