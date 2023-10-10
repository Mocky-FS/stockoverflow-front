import React from 'react';
import PropTypes from 'prop-types';
import './orderStock.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Button, NumberInput, Title } from '@tremor/react';
import Select from 'react-select';
import { toast } from 'react-toastify';
import { useForm, Controller } from 'react-hook-form';



const OrderStock = ({ closeModal }) => {

    const { register, handleSubmit, watch, control, formState: { errors }, setError } = useForm();


    const submitForm = (data) => {
        if (window.confirm('Etes-vous sûr de vouloir commander ce(s) produit(s) ?')) {
            console.log(data)
            closeModal()
            toast.success('Commande effectuée !')
        }
    }

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'Apple', label: 'Apple' },

    ]

    return (
        <div className='order-stock'>
            <div className='top'>
                <Title className='title'>Réaprovisionnements de stock</Title>
                <button><FontAwesomeIcon icon={faXmark} size='lg' onClick={() => closeModal()} /></button>
            </div>
            <div className='content'>
                <form onSubmit={handleSubmit(submitForm)}>
                    <label>
                        Catégorie
                        <Controller
                            control={control}
                            name='category'
                            defaultValue={null}
                            rules={{ required: 'Veuillez selectionner une catégorie' }}
                            render={({ field }) => (
                                <Select
                                className='text-tremor-content dark:text-dark-tremor-content-muted  '
                                    {...field}
                                    autoFocus
                                    placeholder='Sélectionnez une catégorie'
                                    options={options}
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
                                 className='text-tremor-content dark:text-dark-tremor-content-muted  '
                                    {...field}
                                    placeholder='Sélectionnez un produit'
                                    options={options}
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
                                    placeholder='Indiquer une quantité'
                                    min={1}
                                    error={errors.quantity}
                                />
                            )}
                        />
                        {errors.quantity && <span className='error'>{errors.quantity.message}</span>}
                    </label>
                    <Button
                        type='submit' >Commander</Button>
                    <span className='message'>* La commande devra être validée par un administrateur avant d'être approuvée</span>
                </form>

            </div>
        </div >
    );
};

OrderStock.propTypes = {

};

export default OrderStock;