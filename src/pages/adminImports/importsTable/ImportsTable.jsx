import { Badge, Card, DonutChart, Legend, Select, SelectItem, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text, TextInput, Title } from '@tremor/react';
import React, { useState } from 'react';
import Search from '../../../assets/icons/search.svg?react';
import Filters from '../../../assets/icons/filters.svg?react';

import { useQuery } from '@tanstack/react-query';
import { keys } from '../../../../query-key-factory';
import { getImports } from '../../../api/imports';
import LoadingDots from '../../../components/LoadingDots/LoadingDots';
import { badgeColorStatus } from '../../../utils/functions';
import { MultiSelect, MultiSelectItem } from "@tremor/react";
import { Tooltip } from '@nextui-org/react';

import Check from '../../../assets/icons/check.svg?react'
import Cross from '../../../assets/icons/crossCircle.svg?react'
import toast from 'react-hot-toast';


const ImportsTable = () => {

    const [search, setSearch] = useState('')
    const [displayFilters, setDisplayFilters] = useState(false)



    const { data: importsList, isLoading: importsListLoading } = useQuery(
        keys.imports({}),
        () => getImports(),
    )


    const resultFiltered = importsList?.filter((order) => (
        order?.user?.first_name?.toLowerCase().includes(search.toLowerCase()) ||
        order?.user?.last_name?.toLowerCase().includes(search.toLowerCase()) ||
        order?.product?.name?.toLowerCase().includes(search.toLowerCase() ||
            order?.status?.toLowerCase().includes(search.toLowerCase()))

    ));

    const formatDate = (date) => {
        const newDate = new Date(date)
        return newDate.toLocaleDateString()
    }


    const formatNumber = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }



    const getOrdersCountByUser = (data) => {
        // Crée un objet pour stocker le nombre de commandes par utilisateur.
        const orderCountMap = new Map();

        // Parcourez les données d'export et comptez le nombre de commandes par utilisateur.
        data?.forEach((order) => {
            const userId = order.user.id;
            // const userName = `${order.user.first_name} ${order.user.last_name}`;

            if (orderCountMap.has(userId)) {
                orderCountMap.set(userId, orderCountMap.get(userId) + 1);
            } else {
                orderCountMap.set(userId, 1);
            }
        });

        // Convertit l'objet Map en un tableau d'objets avec le nom de la personne et le nombre de commandes.
        const orderCountArray = Array?.from(orderCountMap, ([userId, count]) => ({
            name: `${data?.find(order => order.user.id === userId).user.first_name} ${data?.find(order => order.user.id === userId).user.last_name}`,
            orderCount: count,
        }));

        return orderCountArray;
    }

    const userOrderCounts = getOrdersCountByUser(importsList);

    const getTopOrderedGames = (data) => {
        // Crée un objet pour stocker le nombre de commandes par jeu.
        const gameOrderCountMap = new Map();

        // Parcourez les données d'export et comptez le nombre de commandes par jeu.
        data?.forEach((order) => {
            if (order?.product && order.product.name) {
                const gameName = order.product.name;

                if (gameOrderCountMap.has(gameName)) {
                    gameOrderCountMap.set(gameName, gameOrderCountMap.get(gameName) + 1);
                } else {
                    gameOrderCountMap.set(gameName, 1);
                }
            }
        });

        // Triez les jeux en fonction du nombre de commandes.
        const sortedGames = [...gameOrderCountMap.entries()]
            .sort((a, b) => b[1] - a[1])
            .slice(0, 3);

        const top3Games = sortedGames?.map(([game, count]) => ({ name: game, orderCount: count }));

        return top3Games;
    }

    const topOrderedGames = getTopOrderedGames(importsList?.filter((e) => e.status === 'Validée'));

    if (importsListLoading) {
        return <LoadingDots />
    }


    return (
        <div className='w-3/4 flex flex-col gap-4'>
            <div className='flex h-1/4 gap-4'>

                <Card className='w-2/4 h-full'>
                    <Title>Commandes par employés</Title>
                    <div className='flex'>
                        <DonutChart
                            className="mt-6 w-2/4"
                            data={userOrderCounts}
                            category="orderCount"
                            index="name"
                            showAnimation={true}
                        />
                        <div className='flex flex-col'>
                            <Legend
                                className="mt-3"
                                categories={userOrderCounts.map((user) => user.name)}

                            />
                        </div>
                    </div>

                </Card>
                <Card className='w-2/4 h-full'>
                    <Title>Top 3 commandes </Title>
                    <div className='flex'>


                        <DonutChart
                            className="mt-6 w-2/4"
                            data={topOrderedGames}
                            category="orderCount"
                            index="name"
                            showAnimation={true}
                        />
                        <div className='flex flex-col w-2/5'>
                            <Legend
                                className="mt-3"
                                categories={topOrderedGames?.map((game) => game.name)}
                            />
                        </div>

                    </div>
                </Card>
            </div>
            <Card className='h-3/4'>
                <div className='flex flex-col'>
                    <div className='flex justify-between'>
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
                            <Tooltip placement="top" content={displayFilters ? 'Fermer les filtres' : 'Afficher les filtres'} color='foreground' >
                                <button
                                    onClick={() => setDisplayFilters(!displayFilters)}
                                >
                                    <Filters className='w-5 text-tremor-content dark:text-tremor-content' />
                                </button>
                            </Tooltip>
                        </div>
                    </div>


                    <Table className="mt-5 table-orders">
                        <TableHead>
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
                                                        toast.error('Commande refusée avec succès !')
                                                    }
                                                }} className=''>
                                                    <Cross className='w-6 h-6 text-dark-tremor-brand' />
                                                </button>
                                                </Tooltip>
                                                <Tooltip placement={'right'} content={'Valider'} color='foreground' >
                                                <button onClick={() => {

                                                    if (window.confirm('Voulez-vous vraiment valider cette commande ?')) {
                                                        // setOrderStatus('Validée')
                                                        toast.success('Commande validée avec succès !')
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