import { Badge, Card, Flex, Select, SelectItem, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text, TextInput, Title } from '@tremor/react';
import React, { useContext, useState } from 'react';
import Search from '../../../assets/icons/search.svg?react';
import { Skeleton } from '@nextui-org/react';
import { useQuery } from '@tanstack/react-query';
import { getImports } from '../../../api/imports';
import { keys } from '../../../../query-key-factory';
import { AuthContext } from '../../../context/AuthContext';
import { badgeColorStatus, formatDate } from '../../../utils/functions';
import LoadingDots from '../../../components/LoadingDots/LoadingDots';
const LastOrders = ({ ordersByUser, orderByUserLoading }) => {

    // const [selectedOption, setSelectedOption] = useState('Tout');
    const [search, setSearch] = useState('')


    const resultFiltered = ordersByUser?.filter((order) => (
        order.id.toString().includes(search.toLowerCase()) ||
        order.category.toLowerCase().includes(search.toLowerCase()) ||
        order.product.toLowerCase().includes(search.toLowerCase()) ||
        order.updateDate.toString().includes(search.toLowerCase())
    ));


    if (orderByUserLoading) {
        return <LoadingDots />
    }

    return (
        <Card className='h-full overflow-hidden'>
            <Flex className="space-x-4 my-4 w-full justify-content">
                <Title className='title'>Mes dernières commandes </Title>

                <TextInput
                    className='w-fit'
                    placeholder='Rechercher'
                    icon={Search}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}

                />
            </Flex>
            <Table className="mt-5 table-stock ">
                <TableHead >
                    <TableRow>
                        <TableHeaderCell>Date</TableHeaderCell>
                        <TableHeaderCell>Categorie</TableHeaderCell>
                        <TableHeaderCell>Produit</TableHeaderCell>
                        <TableHeaderCell>Quantité</TableHeaderCell>
                        <TableHeaderCell>Statut</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody className='overflow-auto' >
                    {
                        resultFiltered?.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>
                                    {formatDate(item.date)}
                                </TableCell>
                                <TableCell>

                                </TableCell>
                                <TableCell>
                                    {item.product.name}
                                </TableCell>
                                <TableCell>
                                    {item.quantity}
                                </TableCell>
                                <TableCell>
                                    <Badge color={badgeColorStatus(item.status)} >
                                        {item.status}
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </Card>
    );
};

export default LastOrders;