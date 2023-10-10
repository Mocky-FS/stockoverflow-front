import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Badge, Bold, Button, Flex, Icon, Metric, Subtitle, Text } from '@tremor/react';
import './detailsOrder.scss'
import Cross from '../../../assets/icons/cross.svg?react'
import { toast } from 'react-toastify';

import User from '../../../assets/icons/userSingle.svg?react'
import Time from '../../../assets/icons/time.svg?react'
import Logo from '../../../assets/icons/logo.svg?react'
import Euro from '../../../assets/icons/euro.svg?react'
import Package from '../../../assets/icons/package.svg?react'
import Doc from '../../../assets/icons/doc.svg?react'
import { Card } from '@tremor/react';

const DetailsOrder = ({ item, closeModal }) => {

    const [confirmDelete, setConfirmDelete] = useState(false);
    const [cancelOrder, setCancelOrder] = useState(false);



    return (

        <div className='details'>
            <div className='top'>
                <button onClick={closeModal}><Cross /></button>
            </div>
            <div className='content'>
                <Card decoration="top"  className='test' decorationColor='blue' >
                    <Flex justifyContent="start" className="space-x-4">
                        <Icon icon={Doc} variant="light" size="xl" color={'blue'} />
                        <div className="truncate">
                            <Text>{`Commande n° ${item.id}`}</Text>

                            <Badge color={item.status === 'Validée' ? 'emerald' : 'orange'} >{item.status}</Badge>

                        </div>
                    </Flex>
                </Card>
                <Card decoration="top" decorationColor='blue' className='test'>
                    <Flex justifyContent="start" className="space-x-4">
                        <Icon icon={User} variant="light" size="xl" color={'blue'} />
                        <div className="truncate">
                            <Text>{'Utilisateur'}</Text>
                            <Bold className="truncate">{item.user}</Bold>
                        </div>
                    </Flex>
                </Card>
                <Card decoration="top" decorationColor='blue' className='test'>
                    <Flex justifyContent="start" className="space-x-4">
                        <Icon icon={Logo} variant="light" size="xl" color='blue' />
                        <div className="truncate">
                            <Text>{'Element'}</Text>
                            <Bold className="truncate">{item.stuff}</Bold>
                        </div>
                    </Flex>
                </Card>
                <Card decoration="top" decorationColor='blue' className='test'>
                    <Flex justifyContent="start" className="space-x-4">
                        <Icon icon={Package} variant="light" size="xl" color='blue' />
                        <div className="truncate">
                            <Text>{'Quantité'}</Text>
                            <Bold className="truncate">{item.quantity}</Bold>
                        </div>
                    </Flex>
                </Card>
                <Card decoration="top" decorationColor='blue' className='test'>
                    <Flex justifyContent="start" className="space-x-4">
                        <Icon icon={Euro} variant="light" size="xl" color={'blue'} />
                        <div className="truncate">
                            <Text>{'Prix en euros'}</Text>
                            <Bold className="truncate">{item.amount}€</Bold>
                        </div>
                    </Flex>
                </Card>
            </div>

            <div className='bottom'>


                {
                    item.status === 'En attente' && !confirmDelete && !cancelOrder &&
                    <>
                        <Button variant='secondary' onClick={() => {
                            setCancelOrder(true)
                        }}>Annuler la commande</Button>
                        <Button onClick={() => {
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
                        <div style={{ display: 'flex', gap: "2rem", justifyContent: 'center', padding: '0.5rem' }}>
                            <Button color='red' onClick={() => {
                                setConfirmDelete(false)
                            }}>Retour</Button>
                            <Button color='green' onClick={() => {
                                closeModal()
                                toast.success('Commande approuvée')
                            }}>Approuver</Button>

                        </div>
                    </div>
                }

                {
                    cancelOrder &&

                    <div>
                        <h2>Etes vous sur de vouloir annuler cette commande ? </h2>
                        <div style={{ display: 'flex', gap: "2rem", justifyContent: 'center', padding: '0.5rem' }}>
                            <Button color='red' onClick={() => {
                                setCancelOrder(false)
                            }}>Retour</Button>
                            <Button color='green' onClick={() => {
                                closeModal()
                                toast.success('Commande refusée')
                            }}>Refuser</Button>

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