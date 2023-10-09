import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Badge, Button } from '@tremor/react';
import './detailsOrder.scss'
import Cross from '../../../assets/icons/cross.svg?react'
import { toast } from 'react-toastify';

const DetailsOrder = ({ item, closeModal }) => {

    const [confirmDelete, setConfirmDelete] = useState(false);
    const [cancelOrder, setCancelOrder] = useState(false);

    

    return (

        <div className='details'>
            <div className='top'>

                <h3>{`Détails de la commande n° ${item?.id}`}</h3>
                <button onClick={closeModal}><Cross/></button>

            </div>
            <div className='content'>
                <div >Statut : <Badge color={item.status === 'Validée' ? 'emerald' : 'orange'} >{item.status}</Badge></div>
                <p>Element : Papier bulle</p>
                <p>Quantité : 5</p>
                <p>Prix HT : 350 €</p>
            </div>

            <div className='bottom'>


                {
                    item.status === 'En attente' && !confirmDelete && !cancelOrder &&
                    <>
                        <Button  variant='secondary' onClick={() => {
                           setCancelOrder(true)
                        }}>Annuler la commande</Button>
                        <Button   onClick={() => {
                            // closeModal()
                            // toast.success('Commande approuvée')
                            setConfirmDelete(true)
                        }}>Valider la commande</Button>

                    </>
                }

                {
                    confirmDelete &&
                    <div>
                        <h2>Etes vous sur de vouloir valider cette commande ? </h2>
                        <div style={{ display : 'flex', gap : "2rem", justifyContent : 'center', margin : '1rem 0' }}>
                            <Button color='red' onClick={() => {
                                setConfirmDelete(false)
                            }}>Non</Button>
                            <Button color='green' onClick={() => {
                                closeModal()
                                toast.success('Commande approuvée')
                            }}>Oui</Button>

                        </div>
                    </div>
                }

                {
                    cancelOrder &&

                    <div>
                    <h2>Etes vous sur de vouloir annuler cette commande ? </h2>
                    <div style={{ display : 'flex', gap : "2rem", justifyContent : 'center', margin : '1rem 0' }}>
                        <Button color='red' onClick={() => {
                            setCancelOrder(false)
                        }}>Non</Button>
                        <Button color='green' onClick={() => {
                            closeModal()
                            toast.success('Commande refusée')
                        }}>Oui</Button>

                    </div>
                </div>
                }

                {
                    item.status === 'Expédiée' &&

                    <Button color='green' className='cursor-not-allowed' disabled>Commande validée</Button>
                }
            </div>






        </div>
        // <div className='details-order'>

        //     {/* <div className='top' style={{ display : 'flex', flexDirection : 'column' }}> */}
        //     <div style={{ display : 'flex', justifyContent : 'space-between' }}>
        //         <h3>{`Détails de la commande n° ${item?.id}`}</h3>
        //         <button onClick={() => {
        //             closeModal()
        //         }}><FontAwesomeIcon icon={faXmark} /></button>
        //     </div>
        //     <div>

        //         <h4>{`Utilisateur : ${item?.user}`}</h4>
        //        
        //     </div>


        //     {/* </div> */}
        //     <div className='test'>
        //         <p>Element : Papier bulle</p>
        //         <p>Quantité : 5</p>
        //         <p>Prix HT : 350 €</p>
        //     </div>
        // </div>
    );
};

DetailsOrder.propTypes = {

};

export default DetailsOrder;