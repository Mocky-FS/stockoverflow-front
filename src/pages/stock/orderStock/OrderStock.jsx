import React from 'react';
import PropTypes from 'prop-types';
import './orderStock.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Button, NumberInput } from '@tremor/react';
import Select from 'react-select';
import { toast } from 'react-toastify';
const OrderStock = ({ closeModal }) => {
    return (
        <div className='order-stock'>
            <div className='top'>
                <h2 className='title'>Réaprovisionnements de stock</h2>
                <button><FontAwesomeIcon icon={faXmark} size='lg' onClick={() => closeModal()} /></button>
            </div>
            <div className='content'>
                <form>
                    <label>
                        Catégorie
                        <Select
                            placeholder='Sélectionnez une catégorie'
                        />
                    </label>
                    <label>
                        Produit
                        <Select
                            placeholder='Sélectionnez un produit'
                        />
                    </label>

                    <label>
                        Quantité
                        <NumberInput
                            placeholder='Indiquer une quantité'
                            min={0}
                        />
                    </label>
                    <Button 
                    type='submit'
                    onClick={(e) => {
                        if (window.confirm('Etes-vous sûr de vouloir commander ce produit ?')) {
                            toast.success('Commande effectuée !')
                            e.preventDefault()
                            closeModal()
                        }
                    }}
                    
                    >Commander</Button>
                    <span className='message'>* Toute commande devra être validée par un administrateur</span>
                </form>

            </div>
        </div >
    );
};

OrderStock.propTypes = {

};

export default OrderStock;