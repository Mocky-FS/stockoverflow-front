import { Badge, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text, Title } from '@tremor/react';
import React from 'react';

const AdminReview = () => {

    const data = [
        {
            id: 1,
            date: "12/12/2021",
            client: 'Oclock',
            status: "Validée",
            user: 'Alexandre',
            stuff: 'Call of Duty',
            amount: 750,
            quantity: 54
        },
        {
            id: 2,
            date: "12/12/2021",
            client: 'Oclock',
            status: "En attente",
            user: 'Alexandre',
            stuff: 'FC 2024',
            amount: 918,
            quantity: 63
        },
        {
            id: 3,
            date: "12/12/2021",
            client: 'Oclock',
            status: "Validée",
            user: 'Gael',
            stuff: 'F1 2023',
            amount: 1400,
            quantity: 500
        },
        {
            id: 4,
            date: "12/12/2021",
            client: 'Oclock',
            status: "Validée",
            user: 'Arnaud',
            stuff: 'The Elder Scrolls',
            amount: 123,
            quantity: 23
        },
        {
            id: 5,
            date: "12/12/2021",
            client: 'Oclock',
            status: "En attente",
            user: 'Joris',
            stuff: 'Starfield',
            amount: 7859,
            quantity: 189
        },
        {
            id: 6,
            date: "12/12/2021",
            client: 'Oclock',
            status: "Validée",
            user: 'Alexandre',
            stuff: 'Call of Duty',
            amount: 750,
            quantity: 54
        },
        {
            id: 7,
            date: "12/12/2021",
            client: 'Oclock',
            status: "En attente",
            user: 'Alexandre',
            stuff: 'FC 2024',
            amount: 918,
            quantity: 63
        },
        {
            id: 8,
            date: "12/12/2021",
            client: 'Oclock',
            status: "Validée",
            user: 'Gael',
            stuff: 'F1 2023',
            amount: 1400,
            quantity: 500
        },
        {
            id: 9,
            date: "12/12/2021",
            client: 'Oclock',
            status: "Validée",
            user: 'Arnaud',
            stuff: 'The Elder Scrolls',
            amount: 123,
            quantity: 23
        },
        {
            id: 10,
            date: "12/12/2021",
            client: 'Oclock',
            status: "En Attente",
            user: 'Joris',
            stuff: 'Starfield',
            amount: 7859,
            quantity: 189
        },

    ];


    // const getItemDetails = (item) => {
    //     // setItemDetails(item);
    //     // openModal();
    // }



    return (
        <>
        <Title>Toutes les importations</Title>
            <Table className="mt-5 table-orders">
                <TableHead>
                    <TableRow>
                        <TableHeaderCell >N° </TableHeaderCell>
                        <TableHeaderCell>Date</TableHeaderCell>
                        <TableHeaderCell>Utilisateur</TableHeaderCell>
                        <TableHeaderCell>Produit</TableHeaderCell>
                        <TableHeaderCell>Quantité</TableHeaderCell>
                        <TableHeaderCell>Statut</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data?.map((item) => (

                        <TableRow className='cursor-pointer' key={item.id} onClick={() => {
                           
                        }}>

                            <TableCell>{item.id}</TableCell>
                            <TableCell>
                                <Text>{item.date}</Text>
                            </TableCell>
                            <TableCell>
                                <Text>{item.user}</Text>
                            </TableCell>
                            <TableCell>
                                <Text>{item.stuff}</Text>
                            </TableCell>
                            <TableCell>
                                <Text>{item.quantity}</Text>
                            </TableCell>
                            <TableCell>
                                <Badge color={item.status === 'Validée' ? 'emerald' : 'orange'} >
                                    {item.status}
                                </Badge>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
};

export default AdminReview;