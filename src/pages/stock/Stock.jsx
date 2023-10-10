import { useState } from 'react';
import PropTypes from 'prop-types';
import { Badge, Bold, Card, Flex, Icon, Metric,  Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text, TextInput, Title } from '@tremor/react';
import './stock.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxesStacked, faCartShopping, faCheck, faPlus, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import Modal from '../../components/modal/Modal';
import OrderStock from './orderStock/OrderStock';
import { Select, SelectItem } from "@tremor/react";
import { badgeColor, filterArray } from '../../utils/functions';
import Logo from '../../assets/icons/logo.svg?react'
import Warning from '../../assets/icons/warning.svg?react'
import Check from '../../assets/icons/Check.svg?react'
import { Tooltip } from '@nextui-org/react';
import Cart from '../../assets/icons/cart.svg?react'

const Stock = () => {


    // get the actual theme mode


    const data = [
        {
            id: 1,
            category: "Papier bulle",
            product: 'TAH452',
            quantity: 1,
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
            quantity: 210,
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



    const listProdutcs = data.map(item => (
        <div key={item.id} className='tooltip'>
            <p style={{ textAlign: 'right' }}>{item.product}</p>
            <p>{item.category}</p>
        </div>
    ))

    const criticalStockList = data.filter(item => item.quantity < 50).map(item => (
        <div key={item.id} className='tooltip'>
            <p>{item.product}</p>
            <p>{item.category}</p>
        </div>
    ))

    const mediumStockList = data.filter(item => item.quantity >= 50 && item.quantity < 100).map(item => (
        <div key={item.id} style={{ display: 'flex', width: '100%', justifyContent: 'space-between', gap: '1rem' }}>
            <p>{item.product}</p>
            <p>{item.category}</p>
        </div>
    ))

    const correctStockList = data.filter(item => item.quantity >= 100).map(item => (
        <div key={item.id} style={{ display: 'flex', width: '100%', justifyContent: 'space-between', gap: '1rem' }}>
            <p>{item.product}</p>
            <p>{item.category}</p>
        </div>
    ))

    return (
        <Card className='stock'>

            <Modal
                isOpen={isOpen}
                closeModal={closeModal}
                content={
                    <OrderStock closeModal={closeModal} />
                }
            />
            <div className='cards'>
                <Tooltip content={listProdutcs} placement='bottom' className=' flex flex-col justify-between' size='lg' color='primary'>
                    <Card decoration="left" decorationColor='blue' className='card-top'>
                        <Flex justifyContent="start" className="space-x-4">
                            <Icon icon={Logo} variant="light" size="xl" color={'blue'} />
                            <div className="truncate">
                                <Text>{'Total produits'}</Text>
                                <Metric className="truncate">{10}</Metric>
                            </div>
                        </Flex>
                    </Card>
                </Tooltip>
                <Tooltip content={criticalStockList} placement='bottom' className=' flex flex-col justify-between' size='lg' color='danger'>
                    <Card decoration="left" decorationColor='red' className='card-top'>
                        <Flex justifyContent="start" className="space-x-4">
                            <Icon icon={Warning} variant="light" size="xl" color={'red'} />
                            <div className="truncate">
                                <Text>{'Stock critique'}</Text>
                                <Metric className="truncate">{criticalStockList.length}</Metric>
                            </div>
                        </Flex>
                    </Card>
                </Tooltip>
                <Tooltip content={mediumStockList} placement='bottom' className=' flex flex-col justify-between' size='lg' color='warning'>
                    <Card decoration="left" decorationColor='orange' className='card-top'>
                        <Flex justifyContent="start" className="space-x-4">
                            <Icon icon={Warning} variant="light" size="xl" color={'orange'} />
                            <div className="truncate">
                                <Text>{'Stock faible'}</Text>
                                <Metric className="truncate">{mediumStockList.length}</Metric>
                            </div>
                        </Flex>
                    </Card>
                </Tooltip>
                <Tooltip content={correctStockList} placement='bottom' className=' flex flex-col justify-between' size='lg' color='success' >
                    <Card decoration="left" decorationColor='emerald' className='card-top' >
                        <Flex justifyContent="start" className="space-x-4">
                            <Icon icon={Check} variant="light" size="xl" color={'emerald'} />
                            <div className="truncate">
                                <Text>{'Stock correct'}</Text>
                                <Metric className="truncate">{correctStockList.length}</Metric>
                            </div>
                        </Flex>
                    </Card>
                </Tooltip>
            </div>
            <Card className='card' decoration='top' decorationColor='blue'>
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
                        <Tooltip content='Passer une commande' placement='bottom' color='foreground' >
                            <button className='text-tremor-content dark:text-dark-tremor-content-muted flex items-center gap-2 '
                                onClick={() => openModal()}>
                                <Cart /> <Text>Commander <br></br>un produit</Text>
                            </button>


                        </Tooltip>
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
        </Card>
    );
};

Stock.propTypes = {

};

export default Stock;