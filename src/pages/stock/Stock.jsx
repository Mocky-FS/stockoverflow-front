import { useState } from 'react';
import PropTypes from 'prop-types';
import { Badge, Card, Flex, Icon, Metric, ProgressBar, Tab, TabGroup, TabList, TabPanel, TabPanels, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text, TextInput, Title } from '@tremor/react';
import './stock.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxesStacked, faCartShopping, faCheck, faPlus, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import Modal from '../../components/modal/Modal';
import OrderStock from './orderStock/OrderStock';
import { Select, SelectItem } from "@tremor/react";
import { badgeColor, filterArray } from '../../utils/functions';

const Stock = () => {

    const data = [
        {
            id: 1,
            category: "Papier bulle",
            product: 'TAH452',
            quantity: 50,
            updateDate: '27/01/2021'

        },
        {
            id: 2,
            category: "Papier carton",
            product: 'OPN765',
            quantity: 100,
            updateDate: '27/01/2021'

        },
        {
            id: 3,
            category: "Papier A4",
            product: 'QDC430',
            quantity: 34,
            updateDate: '27/01/2021'

        },
        {
            id: 4,
            category: "Papier A3",
            product: 'PAK765',
            quantity: 121,
            updateDate: '27/01/2021'

        },
        {
            id: 5,
            category: "Papier bulle",
            product: 'TAH452',
            quantity: 50,
            updateDate: '27/01/2021'

        },
        {
            id: 6,
            category: "Papier carton",
            product: 'OPN765',
            quantity: 100,
            updateDate: '27/01/2021'

        },
        {
            id: 7,
            category: "Papier A4",
            product: 'QDC430',
            quantity: 340,
            updateDate: '27/01/2021'

        },
        {
            id: 8,
            category: "Papier A3",
            product: 'PAK765',
            quantity: 121,
            updateDate: '27/01/2021'

        },
        {
            id: 9,
            category: "Papier bulle",
            product: 'TAH452',
            quantity: 120,
            updateDate: '27/01/2021'

        },
        {
            id: 10,
            category: "Papier bulle",
            product: 'TAH452',
            quantity: 122,
            updateDate: '27/01/2021'

        },





    ];

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    const [selectedOption, setSelectedOption] = useState('Tout');

    const criticalStock = data.filter(item => item.quantity < 50).length;
    const lowStock = data.filter(item => item.quantity >= 50 && item.quantity < 100).length;
    const correctStock = data.filter(item => item.quantity >= 100).length;



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
                <Card decoration="top" className='recap' decorationColor='emerald'>

                    <div className="truncate">

                        <Title> Total produits</Title>
                        <div className='stats'>
                        <FontAwesomeIcon icon={faBoxesStacked} size='xl' color='green'/>
                            <Text> {data.length} </Text>
                        </div>
                    </div>
                </Card>


                <Card decoration="top" className='recap' decorationColor='red'>

                    <div className="truncate">

                        <Title> Stock critique </Title>
                        <div className='stats'>
                            <FontAwesomeIcon icon={faTriangleExclamation} size='xl' color='red' />
                            <Text> {criticalStock} {criticalStock > 1 ? 'produits' : 'produit'} </Text>
                        </div>
                    </div>
                </Card>
                <Card decoration="top" className='recap' decorationColor='orange'>

                    <div className="truncate">
                        <Title> Stock faible </Title>
                        <div className='stats'>
                            <FontAwesomeIcon icon={faTriangleExclamation} size='xl' color='orange' />
                            <Text>{lowStock} {lowStock > 1 ? 'produits' : 'produit'}</Text>
                        </div>
                    </div>
                </Card>
                <Card decoration="top" className='recap' decorationColor='emerald'>

                    <div className="truncate">
                        <Title> Stock correct </Title>
                        <div className='stats'>
                            <FontAwesomeIcon icon={faCheck} size='xl' color='green' />
                            <Text> {correctStock} {correctStock > 1 ? 'produits' : 'produit'}</Text>
                        </div>


                    </div>
                    {/* </Flex> */}
                </Card>

            </div>
            <Card className='card' decoration='top' decorationColor='neutral'>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Title className='title'>Récapitulatif du stock </Title>
                    <div style={{ display: 'flex', gap: "2rem", width: 'fit-content' }}>
                        <div style={{ width: '150px' }}>
                            <Select
                                placeholder='Filtrer par état'
                                value={selectedOption}
                                onChange={(e) => setSelectedOption(e)}

                            >
                                <SelectItem value="Tout" />
                                <SelectItem value="Correct" />
                                <SelectItem value="Faible" />
                                <SelectItem value="Critique" />
                            </Select>
                        </div>
                        <button onClick={() => openModal()}><FontAwesomeIcon icon={faCartShopping} size='lg' /></button>
                    </div>
                </div>

                <div className='scroll'>



                    <Table className="mt-5 table-stock">
                        <TableHead >
                            <TableRow>
                                <TableHeaderCell>Categorie</TableHeaderCell>
                                <TableHeaderCell>Produit</TableHeaderCell>
                                <TableHeaderCell>Quantité</TableHeaderCell>
                                <TableHeaderCell>Dernière mise à jour</TableHeaderCell>
                            </TableRow>
                        </TableHead>
                        <TableBody >



                            {
                                filterArray(selectedOption, data)?.map((item) => (
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
                                                {item.quantity < 50 && <FontAwesomeIcon bounce icon={faTriangleExclamation} size='lg' />}
                                                {item.quantity >= 50 && item.quantity < 100 && <FontAwesomeIcon fade icon={faTriangleExclamation} size='lg' />}
                                                {item.quantity > 50 && <FontAwesomeIcon icon={faCheck} size='lg' />}
                                            </Badge>

                                        </TableCell>
                                        <TableCell>
                                            {item.updateDate}
                                        </TableCell>


                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </div>
            </Card>
        </div>
    );
};

Stock.propTypes = {

};

export default Stock;