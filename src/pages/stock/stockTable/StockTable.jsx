import { Skeleton, Tooltip } from '@nextui-org/react';
import { Badge, Card, Flex, Icon, Metric, Select, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text, Title, SelectItem, TextInput } from '@tremor/react';
import { useState } from 'react';
import { badgeColorQuantity, filterArray } from '../../../utils/functions';
import Warning from '../../../assets/icons/warning.svg?react'
import Check from '../../../assets/icons/Check.svg?react'
import Search from '../../../assets/icons/search.svg?react'
import Filters from '../../../assets/icons/filters.svg?react'


import { keys } from '../../../../query-key-factory';
import { getProducts } from '../../../api/products';
import { useQuery } from '@tanstack/react-query';
import LoadingDots from '../../../components/LoadingDots/LoadingDots';
import { getCateories } from '../../../api/categories';

const StockTable = () => {

    const [productSelected, setProductSelected] = useState(null);
    const [categorySelected, setCategorySelect] = useState(null);
    const [displayFilters, setDisplayFilters] = useState(false);

    const [search, setSearch] = useState('')

    const { data: productsList, isLoading: productsLoading } = useQuery(
        keys.products({}),
        () => getProducts(),
    )

    const { data: categoriesList, isLoading: categoriesLoading } = useQuery(
        keys.categories({}),
        () => getCateories(),
    )

    const criticalStockList = productsList?.filter(item => item.quantity < 50)
    const mediumStockList = productsList?.filter(item => item.quantity >= 50 && item.quantity < 100)
    const correctStockList = productsList?.filter(item => item.quantity >= 100)


    const resultFiltered = productsList?.filter((product) => {

        if (productSelected && categorySelected) {

            return product.id === productSelected && product.product_category.id === categorySelected

        } else if (categorySelected && !productSelected) {

            return product.product_category.id === categorySelected

        } else if (productSelected && !categorySelected) {

            return product.id === productSelected

        } else {

            return product?.name.toLowerCase().includes(search.toLowerCase()) ||
                product?.product_category.name.toLowerCase().includes(search.toLowerCase()) ||
                product?.price.toString().includes(search.toLowerCase())
        }
    });

    if (productsLoading) {
        return <LoadingDots />
    }


    return (
        <Card className='w-3/4 overflow-hidden' >
            <Flex justifyContent="start" className="space-x-4 my-4 ">
                <Card decoration='top' decorationColor='red'>
                    <Flex justifyContent="start" className="space-x-4">
                        <Icon icon={Warning} variant="light" size="xl" color={'red'} />
                        <div className="truncate">
                            <Text>{'Stock critique'}</Text>
                            <Metric className="truncate">{criticalStockList?.length}</Metric>
                        </div>
                    </Flex>

                </Card>
                <Card decoration='top' decorationColor='orange'>

                    <Flex justifyContent="start" className="space-x-4">
                        <Icon icon={Warning} variant="light" size="xl" color={'orange'} />
                        <div className="truncate">
                            <Text>{'Stock faible'}</Text>
                            <Metric className="truncate">{mediumStockList?.length}</Metric>
                        </div>
                    </Flex>

                </Card>
                <Card decoration='top' decorationColor='emerald'>

                    <Flex justifyContent="start" className="space-x-4">
                        <Icon icon={Check} variant="light" size="xl" color={'emerald'} />
                        <div className="truncate">
                            <Text>{'Stock correct'}</Text>
                            <Metric className="truncate">{correctStockList?.length}</Metric>
                        </div>
                    </Flex>

                </Card>
            </Flex>
            <Flex className='justify-between'>
                <Title className='title'>Récapitulatif du stock </Title>


                <div className='flex gap-2'>
                    <TextInput
                        className='w-fit'
                        placeholder='Rechercher'
                        icon={Search}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    {displayFilters &&
                        <>
                            <Select
                                placeholder='Produit'
                                className='w-fit'
                                value={productSelected}
                                onValueChange={(value) => setProductSelected(value)}
                                enableClear={true}
                            >
                                {
                                    productsList?.map((item) => (
                                        <SelectItem key={item.id} value={item.id}>
                                            {item.name}
                                        </SelectItem>
                                    ))
                                }
                            </Select>
                            <Select
                                placeholder='Catégorie'
                                className='w-fit'
                                value={categorySelected}
                                onValueChange={(value) => setCategorySelect(value)}
                                enableClear={true}
                            >
                                {
                                    categoriesList?.map((item) => (
                                        <SelectItem key={item.id} value={item.id}>
                                            {item.name}
                                        </SelectItem>
                                    ))
                                }
                            </Select>
                        </>

                    }
                       <Tooltip placement="top" content={displayFilters ? 'Cacher les filtres' : 'Afficher les filtres'} color='foreground' >
                        <button
                            className='ml-2'
                            onClick={() => setDisplayFilters(!displayFilters)}>
                            <Filters className='w-5 text-tremor-content dark:text-tremor-content' />
                        </button>
                    </Tooltip>
                </div>

            </Flex>

            <div className='overflow-hidden h-full'>
                <Table className="mt-10 h-4/5 overflow-auto ">
                    <TableHead className='sticky top-0 dark:bg-dark-tremor-background bg-tremor-background' >
                        <TableRow className=''>
                            <TableHeaderCell className='text-left '>Categorie</TableHeaderCell>
                            <TableHeaderCell className='text-center '>Produit</TableHeaderCell>
                            <TableHeaderCell className='text-center '>Quantité</TableHeaderCell>
                            <TableHeaderCell className='text-center '>Prix</TableHeaderCell>

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