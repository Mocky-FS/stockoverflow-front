import { Badge, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text, TextInput, Title } from '@tremor/react';
import { useState } from 'react';
import Trash from '../../../assets/icons/trash.svg?react'
import Edit from '../../../assets/icons/edit.svg?react'
import { deleteUser, getUsers } from '../../../api/users';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { keys } from '../../../../query-key-factory';
import { toast } from 'react-toastify';
import Search from '../../../assets/icons/search.svg?react'
import Modal from '../../../components/modal/Modal'
import ModalContent from '../modalContent/ModalContent';
import { Tooltip } from '@nextui-org/react';
import LoadingDots from '../../../components/LoadingDots/LoadingDots';
const UsersTable = () => {

    const queryClient = useQueryClient();

    const [search, setSearch] = useState('')

    const { data: usersList, isLoading: usersLoading } = useQuery(
        keys.users({}),
        () => getUsers(),
        
    )

    console.log(usersList)

    const [displayModal, setDisplayModal] = useState(false)

    const { mutate: deleteUserMutation } = useMutation((userId) => deleteUser(userId), {

        onMutate: async (data) => {
            // await queryClient.cancelQueries(keys.users({}))
            // const previousUsers = queryClient.getQueryData(keys.users({}))
           
            // queryClient.setQueryData(keys.users({}), (old) => {
            //     return old.filter((user) => user.id !== data)
            // }
            // )


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
        user?.last_name?.toLowerCase()?.includes(search?.toLowerCase()) ||
        user?.first_name?.toLowerCase()?.includes(search?.toLowerCase()) ||
        user?.email?.toLowerCase()?.includes(search?.toLowerCase())
    ));

    if (usersLoading){
        return  <LoadingDots />
    }
    

    return (
        <>
       
            {displayModal && <Modal
                isOpen={displayModal}
                closeModal={setDisplayModal}
              
                
                // }
                />
            }
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
                                <Text>{user.first_name}</Text>
                            </TableCell>
                            <TableCell>
                                <Text>{user.last_name}</Text>
                            </TableCell>
                            <TableCell>
                                <Badge color={user.roles.includes("ROLE_ADMIN") ? 'red' : 'blue'}>
                                    {user.roles.includes("ROLE_ADMIN") ? 'Admin ' : 'Utilisateur'}
                                </Badge>
                            </TableCell>
                            <TableCell className='flex gap-6'>
                                <Tooltip content={'Modifier'} placement='left'  size='sm' color='foreground' >
                                <button onClick={() => {
                                    console.log(user)
                                    setDisplayModal(true)
                                }}>

                                    <Edit className='w-6' />
                                </button>
                                </Tooltip>
                                <Tooltip content={'Supprimer'} placement='right'  size='sm' color='foreground'  >
                                <button onClick={() => {
                                    if (window.confirm('Voulez vous vraiment supprimer cet utilisateur ?')) {
                                        deleteUserMutation(user.id)
                                    }
                                }}><Trash className='w-6' /></button>
                                </Tooltip>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
};

export default UsersTable;