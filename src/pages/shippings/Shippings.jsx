import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Card, Flex, Metric, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text, Title } from '@tremor/react';
import './shippings.scss'

const Shippings = () => {

    const data = [
        {
            name: 1,
            date: "12/12/2021",
            client: 'Oclock',
            status: "Expédiée",
            user : 'Jean',
        },
        {
            name: 2,
            date: "12/12/2021",
            client: 'Oclock',
            status: "Expédiée",
            user : 'Maxime',
        },
        {
            name: 3,
            date: "12/12/2021",
            client: 'Oclock',
            status: "Expédiée",
            user : 'Antoine',
        },
        {
            name: 4,
            date: "12/12/2021",
            client: 'Oclock',
            status: "Expédiée",
            user : 'Alex',
        },
        {
            name: 5,
            date: "12/12/2021",
            client: 'Oclock',
            status: "Expédiée",
            user : 'Gael',
        },

    ];


    return (
        <div className='shippings'>
            <div className='cards'>
                <Card decoration="top" className='recap' >
                    <Flex justifyContent="start" className="space-x-4">

                        <div className="truncate">
                            <Text>Commandes expédiées</Text>
                            <Metric className="truncate">5</Metric>
                        </div>
                    </Flex>
                </Card>
              
            </div>
            <Card className='card' decoration='top'>
                <Title>Historique des commandes expédiées</Title>
                <Table className="mt-5 table-shippings">
                    <TableHead>
                        <TableRow>
                            <TableHeaderCell>N° </TableHeaderCell>
                            <TableHeaderCell>Date</TableHeaderCell>
                            <TableHeaderCell>Utilisateur</TableHeaderCell>
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
            </Card>
        </div>
    );
};

Shippings.propTypes = {

};

export default Shippings;