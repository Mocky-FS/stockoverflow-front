import { Badge, Card, DonutChart, Legend, Select, SelectItem, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text, TextInput, Title } from '@tremor/react';
import { useState } from 'react';
import Search from '../../../assets/icons/search.svg?react';
import Filters from '../../../assets/icons/filters.svg?react';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { keys } from '../../../../query-key-factory';
import { getImports } from '../../../api/imports';
import LoadingDots from '../../../components/LoadingDots/LoadingDots';
import { badgeColorStatus } from '../../../utils/functions';
import { Tooltip } from '@nextui-org/react';

import Check from '../../../assets/icons/check.svg?react'
import Cross from '../../../assets/icons/crossCircle.svg?react'
import toast from 'react-hot-toast';
import { updateStatus } from '../../../api/imports';


const ImportsTable = () => {


    const [search, setSearch] = useState('')
    const [displayFilters, setDisplayFilters] = useState(false)

    const queryClient = useQueryClient();


    const { mutate: updateMutation } = useMutation((data) => updateStatus(data), {

        onSuccess: (data) => {
            toast.success(`La commande a bien été ${data.data.status === 'Validée' ? 'validée' : 'annulée'} !`)
        },
        onError: () => {
            toast.error('Une erreur est survenue lors de mise à jour du statut')
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: keys.imports })
        }

    })

    const { data: importsList, isLoading: importsListLoading } = useQuery(
        keys.imports({}),
        () => getImports(),
    )

    const resultFiltered = importsList?.filter((order) => (
        order?.user?.first_name?.toLowerCase().includes(search.toLowerCase()) ||
        order?.user?.last_name?.toLowerCase().includes(search.toLowerCase()) ||
        order?.product?.name?.toLowerCase().includes(search.toLowerCase() ||
            order?.status?.toLowerCase().includes(search.toLowerCase()))

    )).sort((a, b) => b.id - a.id)

    // sort by status



    const formatDate = (date) => {
        const newDate = new Date(date)
        return newDate.toLocaleDateString()
    }

    const formatNumber = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    const validateImport = (order, isValidate) => {

        const newStatus = {
            product_id: order.id,
            status: isValidate ? 'Validée' : 'Annulée'
        }
        updateMutation(newStatus)
    }

    const getCountOrdersByUser = importsList?.reduce((acc, currentV) => {
        const user = currentV.user.first_name + ' ' + currentV.user.last_name;
        const findedUser = acc.find((e) => e.user === user)

        if (!findedUser) {

            return [...acc, {
                user: user,
                orderCount: 1
            }]
        }

        else {
            findedUser.orderCount += 1
            return acc
        }

    }, [])



    const getTopGames = importsList?.filter((e) => e.status === 'Validée').reduce((acc, currentV) => {

        const product = currentV.product.name

        const findedProduct = acc.find((e) => e.product === product)

        if (!findedProduct) {
            return [...acc, {
                product: product,
                orderQuantity: currentV.quantity
            }]
        } else {

            findedProduct.orderQuantity += currentV.quantity
            return acc
        }


    }, []).sort((a, b) => b.orderQuantity - a.orderQuantity).slice(0, 3)



    if (importsListLoading) {
        return <LoadingDots />
    }


    return (
        <div className='w-3/4 flex flex-col gap-4 '>
            <div className='flex h-1/4 gap-4'>

                <Card className='w-2/4 h-full overflow-auto'>
                    <Title>Commandes par employés</Title>
                    <div className='flex'>
                        <DonutChart
                            className="mt-6 w-2/4"
                            data={getCountOrdersByUser}
                            category="orderCount"
                            index="name"
                            showAnimation={true}
                        />
                        <div className='flex flex-col w-fit'>
                            <Legend
                                className="mt-3"
                                categories={getCountOrdersByUser.map((staff) => staff.user)}

                            />
                        </div>
                    </div>

                </Card>
                <Card className='w-2/4 h-full overflow-auto'>
                    <Title>Top 3 commandes </Title>
                    <div className='flex'>


                        <DonutChart
                            className="mt-6 w-2/4"
                            data={getTopGames}
                            category="orderQuantity"
                            index="product"
                            showAnimation={true}
                        />
                        <div className='flex flex-col w-2/5'>
                            <Legend
                                className="mt-3"
                                categories={getTopGames?.map((article) => article.product)}
                            />
                        </div>

                    </div>
                </Card>
            </div>
            <Card className='h-3/4 overflow-hidden '>
                <div className='flex flex-col h-full'>
                    <div className='flex justify-between '>
                        <Title>Toutes les commandes</Title>
                        <div className='flex gap-4 w-2/4 justify-end'>

                            {displayFilters &&

                                <>
                                    <Select
                                        placeholder='Statut'
                                        className='w-fit'


                                    >
                                        <SelectItem value="1">Tous</SelectItem>
                                        <SelectItem value="2">En attente</SelectItem>
                                        <SelectItem value="3">Validée</SelectItem>
                                        <SelectItem value="4">Annulée</SelectItem>
                                    </Select>
                                    <Select
                                        className='w-fit'
                                        placeholder='Catégorie'

                                    >
                                        <SelectItem value="1">PC</SelectItem>
                                        <SelectItem value="2">PS5</SelectItem>
                                        <SelectItem value="3">XBOX S</SelectItem>
                                        <SelectItem value="4">Switch</SelectItem>


                                    </Select>
                                    <Select
                                        className='w-fit'
                                        placeholder='Montant'

                                    >
                                        <SelectItem value="1">Jusqu'à 500 EUR</SelectItem>
                                        <SelectItem value="2">500 à 1000 EUR</SelectItem>
                                        <SelectItem value="3">1000 EUR et plus</SelectItem>


                                    </Select>

                                </>
                            }
                            <TextInput
                                className='w-fit'
                                placeholder='Rechercher'
                                icon={Search}
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}

                            />
                            <Tooltip placement="top" content={displayFilters ? 'Cacher les filtres' : 'Afficher les filtres'} color='foreground' >
                                <button
                                    onClick={() => setDisplayFilters(!displayFilters)}
                                >
                                    <Filters className='w-5 text-tremor-content dark:text-tremor-content' />
                                </button>
                            </Tooltip>
                        </div>
                    </div>


                    <Table className="mt-5 table-orders h-11/12 overflow-auto ">
                    <TableHead className='sticky top-0 dark:bg-dark-tremor-background bg-tremor-background' >
                            <TableRow>
                                <TableHeaderCell >N° </TableHeaderCell>
                                <TableHeaderCell>Date</TableHeaderCell>
                                <TableHeaderCell>Produit</TableHeaderCell>
                                <TableHeaderCell>Catégorie</TableHeaderCell>
                                <TableHeaderCell>Utilisateur</TableHeaderCell>
                                <TableHeaderCell>Quantité</TableHeaderCell>
                                <TableHeaderCell>Montant</TableHeaderCell>
                                <TableHeaderCell className='text-center'>Statut</TableHeaderCell>
                                <TableHeaderCell className='text-center'>Actions</TableHeaderCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {resultFiltered?.map((order) => (

                                <TableRow key={order.id} onClick={() => {
                                }}>

                                    <TableCell>{order.id}</TableCell>
                                    <TableCell>
                                        <Text>{formatDate(order.date)}</Text>
                                    </TableCell>
                                    <TableCell>
                                        <Text>{order.product.name}</Text>
                                    </TableCell>
                                    <TableCell>

                                    </TableCell>
                                    <TableCell>
                                        <Text>{order.user.first_name + ' ' + order.user.last_name}</Text>
                                    </TableCell>
                                    <TableCell>
                                        <Text>{order.quantity}</Text>
                                    </TableCell>
                                    <TableCell>
                                        <Text>{formatNumber(order.quantity * order.product.price)} €</Text>
                                    </TableCell>
                                    <TableCell className='text-center'>
                                        <Badge color={badgeColorStatus(order.status)} >
                                            {order.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className='text-right flex gap-4'>
                                        {order.status === 'En attente' &&
                                            <>
                                                <Tooltip placement={'left'} content={'Refuser'} color='foreground' >
                                                    <button onClick={() => {
                                                        if (window.confirm('Voulez-vous vraiment refuser cette commande ?')) {
                                                            // setOrderStatus('Annulée')
                                                            validateImport(order, false)
                                                        }
                                                    }} className=''>
                                                        <Cross className='w-6 h-6 text-dark-tremor-brand' />
                                                    </button>
                                                </Tooltip>
                                                <Tooltip placement={'right'} content={'Valider'} color='foreground' >
                                                    <button onClick={() => {

                                                        if (window.confirm('Voulez-vous vraiment valider cette commande ?')) {
                                                            validateImport(order, true)
                                                        }
                                                    }} >
                                                        <Check className='w-6 h-6 text-dark-tremor-brand ' />
                                                    </button>
                                                </Tooltip>
                                            </>
                                        }
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                </div>
            </Card>

        </div>
    );
};

export default ImportsTable;