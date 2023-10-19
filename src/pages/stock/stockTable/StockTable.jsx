import { Skeleton, Tooltip } from '@nextui-org/react';
import { Badge, Card, Flex, Icon, Metric, Select, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text, Title, SelectItem, TextInput } from '@tremor/react';
import { useState } from 'react';
import { badgeColorQuantity, filterArray } from '../../../utils/functions';
import Warning from '../../../assets/icons/warning.svg?react'
import Check from '../../../assets/icons/Check.svg?react'
import Search from '../../../assets/icons/search.svg?react'

import { keys } from '../../../../query-key-factory';
import { getProducts } from '../../../api/products';
import { useQuery } from '@tanstack/react-query';
import LoadingDots from '../../../components/LoadingDots/LoadingDots';

const StockTable = () => {

    const [selectedOption, setSelectedOption] = useState('Tout');
    const [search, setSearch] = useState('')

    const { data: productsList, isLoading: productsLoading } = useQuery(
        keys.products({}),
        () => getProducts(),
    )

    const criticalStockList = productsList?.filter(item => item.quantity < 50)
    const mediumStockList = productsList?.filter(item => item.quantity >= 50 && item.quantity < 100)
    const correctStockList = productsList?.filter(item => item.quantity >= 100)


    const resultFiltered = productsList?.filter((product) => (
        product?.name.toLowerCase().includes(search.toLowerCase()) ||
        product?.product_category.name.toLowerCase().includes(search.toLowerCase()) ||
        product?.price.toString().includes(search.toLowerCase())
    ));

    if (productsLoading) {
        return <LoadingDots />
    }


    return (
        // <Skeleton className='rounded-md dark:bg-dark-tremor-background gap-4 p-4 overflow-hidden w-3/4' isLoaded={!productsLoading}>
        <Card className='w-3/4 overflow-hidden' >

           
            <Flex justifyContent="start" className="space-x-4 my-4 ">
                {/* <Tooltip content={criticalStockList} placement='bottom' size='lg' color='danger' > */}
                    <Card decoration='top' decorationColor='red'>
                        <Flex justifyContent="start" className="space-x-4">
                            <Icon icon={Warning} variant="light" size="xl" color={'red'} />
                            <div className="truncate">
                                <Text>{'Stock critique'}</Text>
                                <Metric className="truncate">{criticalStockList?.length}</Metric>
                            </div>
                        </Flex>

                    </Card>
                {/* </Tooltip> */}
                {/* <Tooltip content={mediumStockList} placement='bottom' className=' flex flex-col justify-between' size='lg' color='warning'> */}
                    <Card decoration='top' decorationColor='orange'>

                        <Flex justifyContent="start" className="space-x-4">
                            <Icon icon={Warning} variant="light" size="xl" color={'orange'} />
                            <div className="truncate">
                                <Text>{'Stock faible'}</Text>
                                <Metric className="truncate">{mediumStockList?.length}</Metric>
                            </div>
                        </Flex>

                    </Card>
                {/* </Tooltip> */}
                {/* <Tooltip content={correctStockList} placement='bottom' className=' flex flex-col justify-between' size='lg' color='success' > */}
                    <Card decoration='top' decorationColor='emerald'>

                        <Flex justifyContent="start" className="space-x-4">
                            <Icon icon={Check} variant="light" size="xl" color={'emerald'} />
                            <div className="truncate">
                                <Text>{'Stock correct'}</Text>
                                <Metric className="truncate">{correctStockList?.length}</Metric>
                            </div>
                        </Flex>

                    </Card>
                {/* </Tooltip> */}
            </Flex>
            {/* </Skeleton> */}
            <Flex className='justify-between'>
                {/* <div className='flex'> */}
                <Title className='title'>Récapitulatif du stock </Title>

                <TextInput
                    className='w-fit'
                    placeholder='Rechercher'
                    icon={Search}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    

                />


                {/* <Select
                    placeholder='Filtrer par état'
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e)}
                    className='w-fit'
                    enableClear={false}

                >
                    <SelectItem value="Tout" />
                    <SelectItem value="Correct" />
                    <SelectItem value="Faible" />
                    <SelectItem value="Critique" />
                </Select> */}
                {/* </div> */}
            </Flex>
            
                <div className='overflow-hidden h-full'>
                    <Table className="mt-10 h-4/5 overflow-auto ">
                        <TableHead className='sticky top-0 dark:bg-dark-tremor-background bg-tremor-background' >
                            <TableRow className=''>
                                <TableHeaderCell className='text-left '>Categorie</TableHeaderCell>
                                <TableHeaderCell className='text-center '>Produit</TableHeaderCell>
                                <TableHeaderCell className='text-center '>Quantité</TableHeaderCell>
                                <TableHeaderCell className='text-center '>Prix</TableHeaderCell>

                                {/* <TableHeaderCell className='text-center'>Dernière mise à jour</TableHeaderCell> */}
                            </TableRow>
                        </TableHead>
                        <TableBody >
                            {
                                resultFiltered?.map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell className='text-left '>
                                            <Text>{item.product_category.name}</Text>
                                        </TableCell>
                                        <TableCell className='text-center'>
                                            <Text>{item.name}</Text>
                                        </TableCell>
                                        <TableCell className='text-center'>
                                            <Badge color={badgeColorQuantity(item.quantity)} className='w-2/3'>
                                                {item.quantity}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className='text-center'>
                                            {item.price} €
                                        </TableCell>
                                        {/* <TableCell className='text-center'>
                                            {item.updateDate}
                                        </TableCell> */}
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </div>
        </Card>
    );
};

export default StockTable;