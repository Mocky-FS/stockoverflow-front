import { Card, Flex, Select, SelectItem, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text, TextInput, Title } from '@tremor/react';
import React, { useState } from 'react';
import Search from '../../../assets/icons/search.svg?react';
import { Skeleton } from '@nextui-org/react';
const LastOrders = () => {

    // const [selectedOption, setSelectedOption] = useState('Tout');
    const [search, setSearch] = useState('')


    const data = [
        {
            id: 1,
            category: "Papier bulle",
            product: 'TAH452',
            quantity: 100,
            updateDate: '27/01/2021'

        },
        {
            id: 2,
            category: "Papier carton",
            product: 'OPN765',
            quantity: 50,
            updateDate: '27/02/2022'

        },
        {
            id: 3,
            category: "Papier A4",
            product: 'QDC430',
            quantity: 150,
            updateDate: '15/06/2022'

        },
        {
            id: 4,
            category: "Papier A3",
            product: 'PAK765',
            quantity: 250,
            updateDate: '1/10/2022'

        },
        {
            id: 5,
            category: "Papier bulle",
            product: 'TAH452',
            quantity: 300,
            updateDate: '15/01/2023'

        },
      





    ];

    const resultFiltered = data?.filter((order) => (
        order.id.toString().includes(search.toLowerCase()) ||
        order.category.toLowerCase().includes(search.toLowerCase()) ||
        order.product.toLowerCase().includes(search.toLowerCase()) ||
        order.updateDate.toString().includes(search.toLowerCase())
    ));


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
                    </TableRow>
                </TableHead>
                <TableBody className='overflow-auto' >
                    {
                        resultFiltered?.map((item) => (
                            <TableRow key={item.id}>
                                 <TableCell>
                                    {item.updateDate}
                                </TableCell>

                                <TableCell>
                                    <Text>{item.category}</Text>
                                </TableCell>
                                <TableCell>
                                    <Text>{item.product}</Text>
                                </TableCell>
                                <TableCell>
                                    <Text>{item.quantity}</Text>

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