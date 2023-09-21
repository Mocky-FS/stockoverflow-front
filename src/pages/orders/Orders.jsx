import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Card, Flex, Metric, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text, Title } from '@tremor/react';
import './orders.scss'
const Orders = props => {

    const data = [
        {
            name: 1,
            date: "12/12/2021",
            client : 'Oclock'  ,
            status: "Expédiée",
        },
        {
            name: 2,
            date: "12/12/2021",
            client : 'Oclock'  ,
            status: "En cours",
        },
        {
            name: 3,
            date: "12/12/2021",
            client : 'Oclock'  ,
            status: "Expédiée",
        },
        {
            name: 4,
            date: "12/12/2021",
            client : 'Oclock'  ,
            status: "Expédiée",
        },
        {
            name: 5,
            date: "12/12/2021",
            client : 'Oclock'  ,
            status: "En cours",
        },

    ];
    



    return (
        <div className='orders'>
            
            <div className='cards'>
            <Card  decoration="top" className='recap' >
          <Flex justifyContent="start" className="space-x-4">
           
            <div className="truncate">
              <Text>Commandes expédiées</Text>
              <Metric className="truncate">3</Metric>
            </div>
          </Flex>
        </Card>
        <Card  decoration="top" className='recap' >
          <Flex justifyContent="start" className="space-x-4">
           
            <div className="truncate">
              <Text>Commandes en cours</Text>
              <Metric className="truncate">2</Metric>
            </div>
          </Flex>
        </Card>
            </div>

            <Card className='card' decoration='top'>
                <Title>Historique de mes commandes</Title>
                <Table className="mt-5 table-orders">
                    <TableHead>
                        <TableRow>
                            <TableHeaderCell>N° </TableHeaderCell>
                            <TableHeaderCell>Date</TableHeaderCell>
                            <TableHeaderCell>Client</TableHeaderCell>
                            <TableHeaderCell>Statut</TableHeaderCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((item) => (
                            <TableRow key={item.name}>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>
                                    <Text>{item.date}</Text>
                                </TableCell>
                                <TableCell>
                                    <Text>{item.client}</Text>
                                </TableCell>
                                <TableCell>
                                    <Badge color={item.status === 'Expédiée' ? 'emerald' : 'orange'} i>
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

Orders.propTypes = {

};

export default Orders;