import {Card } from '@tremor/react';
import MyExportsTable from './myExportsTable/MyExportsTable';
import OrderForm from './orderForm/OrderForm';
import Chart from './chart/Chart';
import MyLastOrders from './myLastOrders/MyLastOrders';
import { useQuery } from '@tanstack/react-query';
import { keys } from '../../../query-key-factory';
import { getCateories } from '../../api/categories';
import { getProducts } from '../../api/products';
import { getClients } from '../../api/clients';

const MyExports = () => {

    const {data : categoriesList, categoriesLoading} = useQuery(
        keys.categories({}),
        () => getCateories(),
    )

    const {data :productsList, productsLoading} = useQuery(
        keys.products({}),
        () => getProducts(),
    )

    const { data: clientsList, isLoading: clientsLoading } = useQuery(
        keys.clients({}),
        () => getClients(),

    )

    return (
        <Card className='flex !rounded-none gap-4 p-4 '> 
            <MyExportsTable />
            <div className='flex flex-col gap-4 justify-start items-start w-2/4' >
                <div className='h-fit  flex gap-4 w-full'>
                    <OrderForm 
                        categoriesList={categoriesList}
                        categoriesLoading={categoriesLoading}
                        productsList={productsList}
                        productsLoading={productsLoading}
                        clientsList={clientsList}
                        clientsLoading={clientsLoading}
                    />
                    <Chart />
                </div>
                <MyLastOrders />
            </div>
        </Card>
    );
};


export default MyExports;