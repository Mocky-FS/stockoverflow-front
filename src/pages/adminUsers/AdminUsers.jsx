import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Badge, Card, Flex, Icon, Metric, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text, Title } from '@tremor/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import Modal from '../../components/modal/Modal';
import Register from '../register/Register';
import AdminReview from './adminReview/AdminReview';
import AdminCreateUser from './adminCreateUser/AdminCreateUser';


const AdminUsers = () => {




    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const [userDetails, setUserDetails] = useState(null);

    const getUserDetails = (data) => {
        setUserDetails(data);
        openModal();
    }

    return (
        <Card className='!rounded-none flex gap-4 p-4'>

            <Card className='w-3/4'>
                <AdminReview />
            </Card>
            <div className='flex flex-col gap-4 w-1/4'>
                <Card className='h-2/4 '>
                    <AdminCreateUser />
                </Card>
                <Card className='h-2/4'>

                </Card>

            </div>
        </Card>
        // <Card className='users'>
        //     <Modal
        //         isOpen={isOpen}
        //         closeModal={closeModal}
        //         content={
        //             <Register
        //                 user={true}
        //             />
        //         }
        //     />
        //     <div className='cards'>

        //         <Card decoration="top" className='recap' >
        //             <Flex justifyContent="start" className="space-x-4">

        //                 <div className="truncate">

        //                     <Text>Nombre d'utilisateurs</Text>
        //                     <Metric className="truncate">5</Metric>
        //                 </div>
        //             </Flex>
        //         </Card>
        //         <Card decoration="top" className='recap' >
        //             <Flex justifyContent="start" className="space-x-4">

        //                 <div className="truncate">
        //                     <Text>Administrateurs</Text>
        //                     <Metric className="truncate">3</Metric>
        //                 </div>
        //             </Flex>
        //         </Card>
        //     </div>
        //     <Card className='card' decoration='top'>

        //         <Title className='title'>Liste des utilisateurs <button onClick={() => openModal()}><FontAwesomeIcon icon={faUserPlus} /></button></Title>


        //     </Card>
        // </Card>
    );
};


export default AdminUsers;