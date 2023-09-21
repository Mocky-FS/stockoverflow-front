import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Badge, Card, Flex, Metric, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text, Title } from '@tremor/react';
import './stock.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faPlus, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import Modal from '../../components/modal/Modal';
import OrderStock from './orderStock/OrderStock';
import Add from './Add/Add';
const Stock = () => {



    const data = [
        {
            id: 1,
            category: "Papier bulle",
            product: 'TAH452',
            quantity: 50,

        },
        {
            id: 2,
            category: "Papier carton",
            product: 'OPN765',
            quantity: 120,

        },
        {
            id: 3,
            category: "Papier A4",
            product: 'QDC430',
            quantity: 34,

        },
        {
            id: 4,
            category: "Papier A3",
            product: 'PAK765',
            quantity: 12,

        },


    ];

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);


    const badgeColor = (quantity) => {
        if (quantity < 50) {
            return 'red';
        } else if (quantity >= 50 && quantity < 100) {
            return 'orange';
        } else {
            return 'emerald';
        }
    }

    return (
        <div className='stock'>
            <Modal
                isOpen={isOpen}
                closeModal={closeModal}
                content={
                    <OrderStock closeModal={closeModal} />
                }

            />
            <div className='cards'>

                <Card decoration="top" className='recap' >
                    <Flex justifyContent="start" className="space-x-4">

                        <div className="truncate">
                            <Text>Nombre d'utilisateurs</Text>
                            <Metric className="truncate">5</Metric>
                        </div>
                    </Flex>
                </Card>
                <Card decoration="top" className='recap' >
                    <Flex justifyContent="start" className="space-x-4">

                        <div className="truncate">
                            <Text>Administrateurs</Text>
                            <Metric className="truncate">3</Metric>
                        </div>
                    </Flex>
                </Card>
            </div>
            <Card className='card' decoration='top'>

                <Title className='title'>Récapitulatif du stock
                    <div className='buttons'>
                        <button onClick={() => openModal()}><FontAwesomeIcon icon={faCartShopping} size='lg' /></button>
                        
                    </div>
                </Title>

                <Table className="mt-5 table-orders">
                    <TableHead>
                        <TableRow>
                            <TableHeaderCell>Categorie</TableHeaderCell>
                            <TableHeaderCell>Produit</TableHeaderCell>
                            <TableHeaderCell>Quantité</TableHeaderCell>
                            <TableHeaderCell>Actions</TableHeaderCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.map((item) => (
                            <TableRow key={item.id}>
                             
                                <TableCell>
                                    <Text>{item.category}</Text>
                                </TableCell>
                                <TableCell>
                                    <Text>{item.product}</Text>
                                </TableCell>
                                <TableCell>
                               
                              
                                    <Badge color={badgeColor(item.quantity)} className='badge'> 
                                        {item.quantity}
                                        { item.quantity < 20 && <FontAwesomeIcon  bounce icon={faTriangleExclamation} size='lg'/>}
                                    </Badge>
                             
                                </TableCell>

                                <TableCell>

                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>
           
                {/* <Add /> */}
           
        </div>
    );
};

Stock.propTypes = {

};

export default Stock;