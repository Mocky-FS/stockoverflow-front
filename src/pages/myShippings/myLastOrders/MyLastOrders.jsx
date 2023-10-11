import { Badge, Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text, Title } from '@tremor/react';
import React from 'react';

const MyLastOrders = () => {

    const data = [
        {
            name: 1,
            date: "12/01/2021",
            client: 'Oclock',
            status: "Expédiée",
        },
        {
            name: 2,
            date: "29/02/2022",
            client: 'Oclock',
            status: "Annulée",
        },
        {
            name: 3,
            date: "12/03/2022",
            client: 'Oclock',
            status: "Expédiée",
        },
        {
            name: 4,
            date: "01/12/2023",
            client: 'CFA',
            status: "Expédiée",
        },
        {
            name: 5,
            date: "19/05/2023",
            client: 'CFA',
            status: "Expédiée",
        },

    ];


    return (
        <Card className='h-full  ' >
             <Title>Mes derniers envois</Title>
             <Table className="mt-5 table-orders" >
                    <TableHead>
                        <TableRow>
                            <TableHeaderCell>N° </TableHeaderCell>
                            <TableHeaderCell>Date</TableHeaderCell>
                            <TableHeaderCell>Client</TableHeaderCell>
                            <TableHeaderCell>Statut</TableHeaderCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.map((item) => (
                            <TableRow key={item.name}>
                                <TableCell>{item.name}</TableCell>
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
                    </TableBody>
                </Table>
        </Card>
    );
};

export default MyLastOrders;