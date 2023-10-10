import  { useState } from 'react';
import PropTypes from 'prop-types';
import { Badge, Card, Flex, Metric, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text, Title } from '@tremor/react';
import './ordersAdmin.scss'

import Modal from '../../components/modal/Modal'
import DetailsOrder from './detailsOrder/DetailsOrder';
const OrdersAdmin = () => {

    const data = [
        {
            id: 1,
            date: "12/12/2021",
            client: 'Oclock',
            status: "Expédiée",
            user: 'Alexandre',
            stuff: 'Papier A4',
            amount: 750,
            quantity: 120
        },
        {
            id: 2,
            date: "12/12/2021",
            client: 'Oclock',
            status: "En attente",
            user: 'Alexandre',
            stuff: 'Papier A3',
            amount: 918,
            quantity: 63
        },
        {
            id: 3,
            date: "12/12/2021",
            client: 'Oclock',
            status: "Expédiée",
            user: 'Gael',
            stuff: 'Rouleau bulles',
            amount: 1400,
            quantity: 500
        },
        {
            id: 4,
            date: "12/12/2021",
            client: 'Oclock',
            status: "Expédiée",
            user: 'Arnaud',
            stuff: 'Papier A4',
            amount: 123,
            quantity: 23
        },
        {
            id: 5,
            date: "12/12/2021",
            client: 'Oclock',
            status: "En attente",
            user: 'Joris',
            stuff: 'Papier A3',
            amount: 7859,
            quantity: 189
        },

    ];

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => {
        setIsOpen(false);
        // setItemDetails(null);
    };

    const [itemDetails, setItemDetails] = useState(null);
    const getItemDetails = (item) => {
        setItemDetails(item);
        openModal();
    }



    return (
        <Card className='orders-admin'>
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
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.map((item) => (

                            <TableRow  className='cursor-pointer'key={item.id} onClick={() => {
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
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>
        </Card>
    );
};

OrdersAdmin.propTypes = {

};

export default OrdersAdmin;