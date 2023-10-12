import { Badge, Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text, TextInput, Title } from '@tremor/react';
import Search from '../../../assets/icons/search.svg?react';
import { useState } from 'react';
const Review = () => {


    const [search, setSearch] = useState('')
    const data = [
        {
            id: 1,
            date: "12/12/2021",
            client: 'Oclock',
            status: "Expédiée",
            user : 'Alex'
        },
        {
            id: 2,
            date: "12/12/2021",
            client: 'Oclock',
            status: "Annulée",
            user : 'Gael'

        },
        {
            id: 3,
            date: "12/12/2021",
            client: 'Oclock',
            status: "Expédiée",
            user : 'Joris'

        },
        {
            id: 4,
            date: "12/12/2021",
            client: 'Oclock',
            status: "Expédiée",
            user : 'Arnaud'

        },
        {
            id: 5,
            date: "12/12/2021",
            client: 'Oclock',
            status: "Annulée",
            user : 'Arnaud'

        },
        {
            id: 6,
            date: "12/12/2021",
            client: 'Oclock',
            status: "Expédiée",
            user : 'Alex'
        },
        {
            id: 7,
            date: "12/12/2021",
            client: 'Oclock',
            status: "Annulée",
            user : 'Gael'

        },
        {
            id: 8,
            date: "12/12/2021",
            client: 'Oclock',
            status: "Expédiée",
            user : 'Joris'

        },
        {
            id: 9,
            date: "12/12/2021",
            client: 'Oclock',
            status: "Expédiée",
            user : 'Arnaud'

        },
        {
            id: 10,
            date: "12/12/2021",
            client: 'Oclock',
            status: "Annulée",
            user : 'Arnaud'

        },

    ];


    const resultFiltered = data?.filter((order) => (
        order.user.toLowerCase().includes(search.toLowerCase()) ||
        order.client.toLowerCase().includes(search.toLowerCase()) ||
        order.status.toLowerCase().includes(search.toLowerCase()) ||
        order.id.toString().includes(search.toLowerCase()) ||
        order.date.toString().includes(search.toLowerCase())
    ));


    return (
        <Card  className='w-2/4'  >
            <div className='flex justify-between'>
               <Title>Les commandes expédiées</Title>
               <TextInput
                    className='w-fit'
                    placeholder='Rechercher'
                    icon={Search}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}

                />
            </div>
                <Table className="mt-5 table-orders">
                    <TableHead>
                        <TableRow>
                            <TableHeaderCell>N° </TableHeaderCell>
                            <TableHeaderCell>Date</TableHeaderCell>
                            <TableHeaderCell>Client</TableHeaderCell>
                            <TableHeaderCell>Statut</TableHeaderCell>
                            <TableHeaderCell>Utilisateur</TableHeaderCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
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
                                <TableCell>
                                    <Text>{item.user}</Text>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
        </Card>
    );
};

export default Review;