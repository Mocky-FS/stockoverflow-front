import { Badge, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text, TextInput, Title } from '@tremor/react';
import React, { useState } from 'react';
import Search from '../../../assets/icons/search.svg?react';

const ExportsTable = () => {

    const [search, setSearch] = useState('')


    const data = [
        {
            id: 1,
            date: "12/12/2021",
            client: 'Fnac',
            status: "Expédiée",
            user : 'Jean',
        },
        {
            id: 2,
            date: "12/12/2021",
            client: 'Darty',
            status: "Expédiée",
            user : 'Maxime',
        },
        {
            id: 3,
            date: "12/12/2021",
            client: 'Boulanger',
            status: "Expédiée",
            user : 'Antoine',
        },
        {
            id: 4,
            date: "12/12/2021",
            client: 'Micromania',
            status: "Expédiée",
            user : 'Alex',
        },
        {
            id: 5,
            date: "12/12/2021",
            client: 'Micromania',
            status: "Expédiée",
            user : 'Gael',
        },
        {
            id: 6,
            date: "12/12/2021",
            client: 'Boulanger',
            status: "Expédiée",
            user : 'Antoine',
        },
        {
            id: 7,
            date: "12/12/2021",
            client: 'Micromania',
            status: "Expédiée",
            user : 'Alex',
        },
        {
            id: 8,
            date: "12/12/2021",
            client: 'Micromania',
            status: "Expédiée",
            user : 'Gael',
        },

    ];

    const resultFiltered = data?.filter((order) => (
        order.id.toString().includes(search.toLowerCase()) ||
        order.user.toLowerCase().includes(search.toLowerCase()) ||
        order.client.toLowerCase().includes(search.toLowerCase()) ||
        order.status.toLowerCase().includes(search.toLowerCase()) ||
        order.date.toString().includes(search.toLowerCase())
    ));


    return (
        <>
        <div className='flex justify-between'>
        <Title>Commandes expédiées</Title>
        <TextInput
                    className='w-fit'
                    placeholder='Rechercher'
                    icon={Search}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}

                />
        </div>
            <Table className="h-full overflow-auto " >
                    <TableHead >
                        <TableRow  >
                            <TableHeaderCell className='dark:bg-dark-tremor-background' >N° </TableHeaderCell>
                            <TableHeaderCell  className='dark:bg-dark-tremor-background'>Date</TableHeaderCell>
                            <TableHeaderCell  className='dark:bg-dark-tremor-background'>Utilisateur</TableHeaderCell>
                            <TableHeaderCell  className='dark:bg-dark-tremor-background'>Client</TableHeaderCell>
                            <TableHeaderCell  className='dark:bg-dark-tremor-background'>Statut</TableHeaderCell>
                        </TableRow>
                    </TableHead>
                    <TableBody > 
                        {resultFiltered?.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.id}</TableCell>
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

export default ExportsTable;