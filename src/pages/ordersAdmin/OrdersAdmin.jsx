import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Badge, Button, Card, Flex, Metric, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text, Title } from '@tremor/react';
import './ordersAdmin.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import Modal from '../../components/modal/Modal'
import DetailsOrder from './detailsOrder/DetailsOrder';
const OrdersAdmin = () => {

    const data = [
        {
            id: 1,
            date: "12/12/2021",
            client: 'Oclock',
            status: "Expédiée",
            user: 'Alexandre'
        },
        {
            id: 2,
            date: "12/12/2021",
            client: 'Oclock',
            status: "En attente",
            user: 'Alexandre'
        },
        {
            id: 3,
            date: "12/12/2021",
            client: 'Oclock',
            status: "Expédiée",
            user: 'Gael'
        },
        {
            id: 4,
            date: "12/12/2021",
            client: 'Oclock',
            status: "Expédiée",
            user: 'Arnaud'
        },
        {
            id: 5,
            date: "12/12/2021",
            client: 'Oclock',
            status: "En attente",
            user: 'Joris'
        },

    ];



    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => {
        setIsOpen(false);
        // setItemDetails(null);
    };

    // get item details for modal
    const [itemDetails, setItemDetails] = useState(null);
    const getItemDetails = (item) => {
        setItemDetails(item);
        openModal();
    }



    return (
        <div className='orders-admin'>
            <Modal 
            isOpen={isOpen}
            closeModal={closeModal}
            content={
               <DetailsOrder 
               item={itemDetails}
               closeModal={closeModal}
               />
            }
            />
            <div className='cards'>
           
                <Card decoration="top" className='recap' >
                    <Flex justifyContent="start" className="space-x-4">

                        <div className="truncate">
                            <Text>Total commandes</Text>
                            <Metric className="truncate">3</Metric>
                        </div>
                    </Flex>
                </Card>
                <Card decoration="top" className='recap' >
                    <Flex justifyContent="start" className="space-x-4">

                        <div className="truncate">
                            <Text>Commandes en attentes</Text>
                            <Metric className="truncate">2</Metric>
                        </div>
                    </Flex>
                </Card>
            </div>


            <Card className='card' decoration='top'>
                <Title>Historique de réaprovisionnements</Title>
                <Table className="mt-5 table-orders">
                    <TableHead>
                        <TableRow>
                            <TableHeaderCell >N° </TableHeaderCell>
                            <TableHeaderCell>Date</TableHeaderCell>
                            <TableHeaderCell>Utilisateur</TableHeaderCell>
                            <TableHeaderCell>Client</TableHeaderCell>
                            <TableHeaderCell>Statut</TableHeaderCell>
                            <TableHeaderCell>Actions</TableHeaderCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.map((item) => (
                            
                            <TableRow key={item.id} onClick={() => {
                                getItemDetails(item)
                            }}>
                                
                                <TableCell>{item.id}</TableCell>
                                <TableCell>
                                    <Text>{item.date}</Text>
                                </TableCell>
                                <TableCell>
                                    <Text>{item.user}</Text>
                                </TableCell>
                                <TableCell>
                                    <Text>{item.client}</Text>
                                </TableCell>
                                <TableCell>
                                    <Badge color={item.status === 'Expédiée' ? 'emerald' : 'orange'} >
                                        {item.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    {item.status === 'En attente' ?
                                        <button className='valid-btn' onClick={() => {
                                            if (window.confirm('Voulez-vous vraiment valider cette commande ?')) {
                                                alert('Commande validée !')
                                            }
                                        }}  >
                                            <FontAwesomeIcon icon={faCircleCheck} size='lg' bounce/>Valider</button> : null}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>
        </div>
    );
};

OrdersAdmin.propTypes = {

};

export default OrdersAdmin;