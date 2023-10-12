import { Tooltip } from '@nextui-org/react';
import { Badge, Card, Flex, Icon, Metric, Select, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text, Title, SelectItem } from '@tremor/react';
import { useState } from 'react';
import { badgeColor, filterArray } from '../../../utils/functions';
import Warning from '../../../assets/icons/warning.svg?react'
import Check from '../../../assets/icons/Check.svg?react'
import { keys } from '../../../../query-key-factory';
import { getProducts } from '../../../api/products';
import { useQuery } from '@tanstack/react-query';

const Review = () => {

    const [selectedOption, setSelectedOption] = useState('Tout');
    const data = [
        

    ];

    const { data: productsList, isLoading: productsLoading } = useQuery(
        keys.products({}),
        () => getProducts(),
    )





    const criticalStockList = data.filter(item => item.quantity < 50).map(item => (
        <div key={item.id} className='flex gap-4 justfiy-between w-48 items-center p-2'>
        
            <p>{item.product}</p>
            <p>{item.category}</p>
        </div>
    ))

    const mediumStockList = data.filter(item => item.quantity >= 50 && item.quantity < 100).map(item => (
        <div key={item.id} className='flex gap-4 justfiy-between  w-48 items-center p-2'>
            <p>{item.product}</p>
            <p>{item.category}</p>
        </div>
    ))

    const correctStockList = data.filter(item => item.quantity >= 100).map(item => (
        <div key={item.id} className='flex gap-4 justfiy-between  w-48 items-center p-2'>
            <p>{item.product}</p>
            <p>{item.category}</p>
        </div>
    ))


    return (
        <Card className='w-3/4' >
            <Flex justifyContent="start" className="space-x-4 my-4">
                <Tooltip content={criticalStockList} placement='bottom'  size='lg' color='danger' >
                    <Card decoration='top' decorationColor='red'>
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
                    <Card decoration='top' decorationColor='orange'>
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
                    <Card decoration='top' decorationColor='emerald'>
                        <Flex justifyContent="start" className="space-x-4">
                            <Icon icon={Check} variant="light" size="xl" color={'emerald'} />
                            <div className="truncate">
                                <Text>{'Stock correct'}</Text>
                                <Metric className="truncate">{correctStockList.length}</Metric>
                            </div>
                        </Flex>
                    </Card>
                </Tooltip>
            </Flex>
            <Flex>
                <Title className='title'>Récapitulatif du stock </Title>
                <Select
                    placeholder='Filtrer par état'
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e)}
                    className='w-1/4'
                    enableClear={false}

                >
                    <SelectItem value="Tout" />
                    <SelectItem value="Correct" />
                    <SelectItem value="Faible" />
                    <SelectItem value="Critique" />
                </Select>
            </Flex>
            <div className='overflow-hidden'>
            <Table className="mt-5 h-fit overflow-auto">
                <TableHead className='sticky top-0 ' >
                    <TableRow>
                        <TableHeaderCell className='text-left'>Categorie</TableHeaderCell>
                        <TableHeaderCell className='text-center'>Produit</TableHeaderCell>
                        <TableHeaderCell className='text-center'>Quantité</TableHeaderCell>
                        <TableHeaderCell className='text-center'>Dernière mise à jour</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody >
                    {
                        filterArray(selectedOption, data)?.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell className='text-left'>
                                    <Text>{item.category}</Text>
                                </TableCell>
                                <TableCell className='text-center'>
                                    <Text>{item.product}</Text>
                                </TableCell>
                                <TableCell className='text-center'>
                                    <Badge color={badgeColor(item.quantity)} className='w-2/3'>
                                        {item.quantity}
                                    </Badge>
                                </TableCell>
                                <TableCell className='text-center'>
                                    {item.updateDate}
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
            </div>
        </Card>
    );
};

export default Review;