import { Badge, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text, TextInput, Title } from '@tremor/react';
import React, { useState } from 'react';
import Trash from '../../../assets/icons/trash.svg?react'
import Edit from '../../../assets/icons/edit.svg?react'
import { deleteUser, getUsers } from '../../../api/users';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { keys } from '../../../../query-key-factory';
import { toast } from 'react-toastify';
import Search from '../../../assets/icons/search.svg?react'

const AdminReview = () => {

    const queryClient = useQueryClient();

    const [search, setSearch] = useState('')

    const { data: usersList, isLoading: usersLoading } = useQuery(
        keys.users({}),
        () => getUsers(),
    )

    const { mutate: deleteUserMutation } = useMutation((userId) => deleteUser(userId), {

        onMutate: async (data) => {
            // await queryClient.cancelQueries(keys.users({}))
            // const previousUsers = queryClient.getQueryData(keys.users({}))
            // queryClient.setQueryData(keys.users({}), (old) => [...old, data])
            // return { previousUsers }

           
        },

        onSuccess: () => {
                toast.success('utilisateur supprimé avec succes')
                // reset()
        },
        onError: () => {
            toast.error('Une erreur est survenue lors de la création')
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: keys.users })


        }

    })



const resultFiltered = usersList?.filter((user) => (
    user.lastname.toLowerCase().includes(search.toLowerCase()) ||
    user.firstname.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
));

    return (
        <>
        <div className='flex justify-between'>
            <Title>Liste des utilisateurs</Title>
            <TextInput 
            className='w-fit' 
            placeholder='Rechercher'
            icon={Search}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            
            />
            </div>
            <Table className="mt-5 w-4/4">
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
                  

                    {resultFiltered?.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>
                                <Text>{user.email}</Text>
                            </TableCell>
                            <TableCell>
                                <Text>{user.firstname}</Text>
                            </TableCell>
                            <TableCell>
                                <Text>{user.lastname}</Text>
                            </TableCell>
                            <TableCell>
                                <Badge color={user.admin ? 'red' : 'blue'}>
                                    {user.admin ? 'Admin ' : 'Utilisateur'}
                                </Badge>
                            </TableCell>
                            <TableCell className='flex gap-4'>
                                <Edit className='w-6'/>
                                
                                <button onClick={() => {
                                    if (window.confirm('Voulez vous vraiment supprimer cet utilisateur ?')) {
                                        deleteUserMutation(user.id)
                                    }
                                }}><Trash className='w-6'/></button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
};

export default AdminReview;