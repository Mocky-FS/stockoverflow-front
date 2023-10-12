import { Badge, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text, Title } from '@tremor/react';
import React from 'react';

const AdminReview = () => {

    const data = [
        {
            name: 1,
            date: "12/12/2021",
            client: 'Fnac',
            status: "Expédiée",
            user : 'Jean',
        },
        {
            name: 2,
            date: "12/12/2021",
            client: 'Darty',
            status: "Expédiée",
            user : 'Maxime',
        },
        {
            name: 3,
            date: "12/12/2021",
            client: 'Boulanger',
            status: "Expédiée",
            user : 'Antoine',
        },
        {
            name: 4,
            date: "12/12/2021",
            client: 'Micromania',
            status: "Expédiée",
            user : 'Alex',
        },
        {
            name: 5,
            date: "12/12/2021",
            client: 'Micromania',
            status: "Expédiée",
            user : 'Gael',
        },
        {
            name: 6,
            date: "12/12/2021",
            client: 'Boulanger',
            status: "Expédiée",
            user : 'Antoine',
        },
        {
            name: 7,
            date: "12/12/2021",
            client: 'Micromania',
            status: "Expédiée",
            user : 'Alex',
        },
        {
            name: 8,
            date: "12/12/2021",
            client: 'Micromania',
            status: "Expédiée",
            user : 'Gael',
        },

    ];



    return (
        <>
        {/* <Title>Commandes expédiées</Title> */}
            <Table className="h-full overflow-auto " >
                    <TableHead >
                        <TableRow  >
                            <TableHeaderCell className='bg-slate-800'>N° </TableHeaderCell>
                            <TableHeaderCell className='bg-slate-800'>Date</TableHeaderCell>
                            <TableHeaderCell className='bg-slate-800'>Utilisateur</TableHeaderCell>
                            <TableHeaderCell className='bg-slate-800'>Client</TableHeaderCell>
                            <TableHeaderCell className='bg-slate-800'>Statut</TableHeaderCell>
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
                                    <Text>{item.user}</Text>
                                </TableCell>
                                <TableCell>
                                    <Text>{item.client}</Text>
                                </TableCell>
                                <TableCell>
                                    <Badge color={item.status === 'Expédiée' ? 'emerald' : 'orange'} >
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