import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Badge, Card, Flex, Icon, Metric, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text, Title } from '@tremor/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './users.scss'
import Modal from '../../components/modal/Modal';
import Register from '../register/Register';


const Users = () => {


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

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <div className='users'>
            <Modal
                isOpen={isOpen}
                closeModal={closeModal}
                content={
                    <Register
                        closeModal={closeModal}
                    />
                }
            />
            <div className='cards'>

                <Card decoration="top" className='recap' >
                    <Flex justifyContent="start" className="space-x-4">

                        <div className="truncate">
                       
                            <Text>Nombre d'utilisateurs</Text>
                            <Metric className="truncate">5</Metric>
                        </div>
                    </Flex>
                </Card>
                <Card decoration="top" className='recap' >
                    <Flex justifyContent="start" className="space-x-4">

                        <div className="truncate">
                            <Text>Administrateurs</Text>
                            <Metric className="truncate">3</Metric>
                        </div>
                    </Flex>
                </Card>
            </div>
            <Card className='card' decoration='top'>

                <Title className='title'>Liste des utilisateurs <button onClick={() => openModal()}><FontAwesomeIcon icon={faUserPlus} /></button></Title>

                <Table className="mt-5 table-orders">
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
                                <TableCell>

                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>
        </div>
    );
};

Users.propTypes = {

};

export default Users;