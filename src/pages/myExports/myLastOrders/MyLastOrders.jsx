import { Badge, Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text, TextInput, Title } from '@tremor/react';
import React, { useState } from 'react';
import Search from '../../../assets/icons/search.svg?react';
const MyLastOrders = () => {

    const [search, setSearch] = useState('')
    

    // const resultFiltered = data?.filter((order) => (
    //     order.date.toString().includes(search.toLowerCase()) ||
    //     order.client.toLowerCase().includes(search.toLowerCase()) ||
    //     order.status.toLowerCase().includes(search.toLowerCase()) ||
    //     order.id.toString().includes(search.toLowerCase())
       
    // ));


    return (
        <Card className='h-full  ' >
            <div className='flex justify-between'>
             <Title>Mes derniers envois</Title>
             <TextInput
                    className='w-fit'
                    placeholder='Rechercher'
                    icon={Search}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}

                />
            </div>
             <Table className="mt-5 table-orders" >
                    <TableHead>
                        <TableRow>
                            <TableHeaderCell>N° </TableHeaderCell>
                            <TableHeaderCell>Date</TableHeaderCell>
                            <TableHeaderCell>Client</TableHeaderCell>
                            <TableHeaderCell>Statut</TableHeaderCell>
                        </TableRow>
                    </TableHead>
                    {/* <TableBody>
                        {resultFiltered?.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.id}</TableCell>
                                <TableCell>
                                    <Text>{item.date}</Text>
                                </TableCell>
                                <TableCell>
                                    <Text>{item.client}</Text>
                                </TableCell>
                                <TableCell>
                                    <Badge color={item.status === 'Expédiée' ? 'emerald' : 'red'} >
                                        {item.status}
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody> */}
                </Table>
        </Card>
    );
};

export default MyLastOrders;