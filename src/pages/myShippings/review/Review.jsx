import { Badge, Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text, Title } from '@tremor/react';

const Review = () => {

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



    return (
        <Card  className='w-2/4'  >
               <Title>Les commandes expédiées</Title>
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
                        {data?.map((item) => (
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