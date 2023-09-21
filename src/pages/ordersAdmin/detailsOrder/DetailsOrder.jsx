import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from '@tremor/react';
import './detailsOrder.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const DetailsOrder = ({item, closeModal}) => {
    return (
        <div className='details-order'>
            
            <div className='top' style={{ display : 'flex', flexDirection : 'column' }}>
            <div>
                    <button onClick={() => {
                        closeModal()
                    }}><FontAwesomeIcon icon={faXmark} /></button>
                </div>
                <div>
                <h3>{`Détails de la commande n° ${item?.id}`}</h3>
                <h4>{`Utilisateur : ${item?.user}`}</h4>
                <div >Statut : <Badge color={item.status === 'Validée'? 'emerald' : 'orange'} >{item.status}</Badge></div>
                </div>
                
               
            </div>
            <div className='test'>
                <p>Element : Papier bulle</p>
                <p>Quantité : 5</p>
                <p>Prix HT : 350 €</p>
            </div>
        </div>
    );
};

DetailsOrder.propTypes = {
    
};

export default DetailsOrder;