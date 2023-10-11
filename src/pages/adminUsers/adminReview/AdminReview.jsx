import { Badge, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text, Title } from '@tremor/react';
import React from 'react';
import Trash from '../../../assets/icons/trash.svg?react'
import Edit from '../../../assets/icons/edit.svg?react'

const AdminReview = () => {

    const data = [
        {
            id: 1,
            firstname: "Alexandre",
            lastname: 'blabla',
            role: "Admin",
            email: "alex@test.fr",
        },
        {
            id: 2,
            firstname: "Arnaud",
            lastname: 'lalala',
            role: "user",
            email: "arnaud@test.fr",
        },
        {
            id: 3,
            firstname: "Gael",
            lastname: 'azazazaz',
            role: "Admin",
            email: "gael@test.fr",
        },
        {
            id: 4,
            firstname: "Joris",
            lastname: 'sdsdsd',
            role: "Admin",
            email: "joris@test.fr",
        },


    ];


    return (
        <>
            <Title>Liste des utilisateurs</Title>
            <Table className="mt-5">
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>Id</TableHeaderCell>
                        <TableHeaderCell>Email</TableHeaderCell>
                        <TableHeaderCell>Prenom</TableHeaderCell>
                        <TableHeaderCell>Nom</TableHeaderCell>
                        <TableHeaderCell>Rôle</TableHeaderCell>
                        <TableHeaderCell>Actions</TableHeaderCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {data?.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell>{item.id}</TableCell>
                            <TableCell>
                                <Text>{item.email}</Text>
                            </TableCell>
                            <TableCell>
                                <Text>{item.firstname}</Text>
                            </TableCell>
                            <TableCell>
                                <Text>{item.lastname}</Text>
                            </TableCell>
                            <TableCell>
                                <Badge color={item.role === 'Admin' ? 'red' : 'green'}>
                                    {item.role}
                                </Badge>
                            </TableCell>
                            <TableCell className='flex gap-4'>
                                <Edit className='w-6'/>
                                <Trash className='w-6'/>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
};

export default AdminReview;