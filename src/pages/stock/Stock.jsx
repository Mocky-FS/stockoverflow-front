

import OrderForm from './orderForm/OrderForm';
import LastOrders from './lastOrders/LastOrders';
import StockTable from './stockTable/StockTable';
import { Card } from '@tremor/react';
import { Skeleton } from '@nextui-org/react';
import { useQuery } from '@tanstack/react-query';
import { keys } from '../../../query-key-factory';
import { getImports } from '../../api/imports';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { getCateories } from '../../api/categories';
import { getProducts } from '../../api/products';

const Stock = () => {

    const { user} = useContext(AuthContext)

    const { data: ordersByUser, isLoading: ordersByUserLoading } = useQuery(
        keys.imports({}),
        () => getImports(),
        {
            select: (data) => data.filter((order) => order.user.id === user.id)
        }
    )

    const { data: categoriesList, isLoading: categoriesLoadding } = useQuery(
        keys.categories({}),
        () => getCateories(),

    )

    const { data: productsList, isLoading: productsListLoading } = useQuery(
        keys.products({}),
        () => getProducts(),
       

    )

    return (
        <Card className=' flex !rounded-none gap-4 p-4 overflow-hidden'>
            <StockTable />
            <div className='flex flex-col gap-4 w-2/4 '>

                <Card className='h-2/4 w-full flex flex-col items-center ' >
                    <OrderForm 
                        categoriesList={categoriesList}
                        categoriesLoadding={categoriesLoadding}
                        productsList={productsList}
                        productsListLoading={productsListLoading}
                    />
                </Card>
                <LastOrders
                    ordersByUser={ordersByUser}
                    ordersByUserLoading={ordersByUserLoading}
                
                />
            </div>
        </Card>
    );
};

Stock.propTypes = {

};

export default Stock;