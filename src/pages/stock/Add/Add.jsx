import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Button, Card, Tab, TabGroup, TabList, TabPanels } from '@tremor/react';
import './add.scss';
const Add = ({ closeModal }) => {
    return (
        <Card className='add'>

            <div className='top'>
                <h2 className='title'>Ajout au stock</h2>
                <button><FontAwesomeIcon icon={faXmark} size='lg' onClick={() => closeModal()} /></button>
            </div>
            <div className='content'>
                <form>
                    <TabGroup>
                        <TabList variant="solid">
                            <Tab>Catégorie</Tab>
                            <Tab>Produit</Tab>
                        </TabList>
                        
                    </TabGroup>
                  
                    <label>
                        Catégorie
                        <input type='text' placeholder='Saisir une catégorie' />
                    </label>
                    <Button
                        type='submit'
                        onClick={(e) => {
                            console.log('test')
                        }}
                    >Créer</Button>
                </form>
            </div>
        </Card>
    );
};

Add.propTypes = {

};

export default Add;