import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './sendShipping.scss';
import Select from 'react-select';
import { Button, NumberInput } from "@tremor/react";
import { toast } from 'react-toastify';

const SendShipping = ({ closeModal }) => {
    return (
        <div className='send-shipping'>
            <div className='top'>
                <h2 className='title'>Expédier une commande</h2>
                <button><FontAwesomeIcon icon={faXmark} size='lg' onClick={() => closeModal()} /></button>
            </div>
            <div className='content'>
                <form>
                    <label>
                        Client
                        <Select 
                            placeholder='Sélectionnez un client'
                        
                        />
                    </label>
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
                            placeholder='Selectionner une quantité'
                            min={0}
                        />
                    </label>
                    <Button
                        type='submit'
                        onClick={(e) => {
                            if (window.confirm('Etes-vous sûr de vouloir envoyer cette commande ?')) {
                                toast.success('Commande envoyée !')
                                e.preventDefault()
                                closeModal()
                            }
                        }}

                    >Envoyer</Button>
                </form>
            </div>
        </div>
    );
};

export default SendShipping;