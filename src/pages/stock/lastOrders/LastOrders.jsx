import { Badge, Card, Flex, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text, TextInput, Title } from '@tremor/react';
import { useState } from 'react';
import Search from '../../../assets/icons/search.svg?react';
import { badgeColorStatus, formatDate } from '../../../utils/functions';
import LoadingDots from '../../../components/LoadingDots/LoadingDots';

const LastOrders = ({ ordersByUser, orderByUserLoading }) => {

    const [search, setSearch] = useState('')

    const resultFiltered = ordersByUser?.filter((order) => (
        order.id.toString().includes(search.toLowerCase()) ||
        order.status.toLowerCase().includes(search.toLowerCase()) ||
        order.product.name.toLowerCase().includes(search.toLowerCase()) ||
        order.quantity.toString().includes(search.toLowerCase()) 
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
            {ordersByUser?.length === 0 ?

                <Text>Aucune commande</Text> :

                <Table className="mt-5 table-stock ">
                    <TableHead >
                        <TableRow>
                            <TableHeaderCell>Date</TableHeaderCell>
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
                </Table>}
        </Card>
    );
};

export default LastOrders;