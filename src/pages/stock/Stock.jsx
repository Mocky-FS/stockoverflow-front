

import OrderForm from './orderForm/OrderForm';
import LastOrders from './lastOrders/LastOrders';
import StockTable from './stockTable/StockTable';
import { Card } from '@tremor/react';
import { Skeleton } from '@nextui-org/react';

const Stock = () => {

    // const criticalStock = data.filter(item => item.quantity < 50).length;
    // const lowStock = data.filter(item => item.quantity >= 50 && item.quantity < 100).length;
    // const correctStock = data.filter(item => item.quantity >= 100).length;


    return (
        <Card className=' flex !rounded-none gap-4 p-4 overflow-hidden'>
            <StockTable />
            <div className='flex flex-col gap-4 w-2/4 '>

                <Card className='h-2/4 w-full flex flex-col items-center ' >
                    <OrderForm />
                </Card>
                <LastOrders />
            </div>
        </Card>
    );
};

Stock.propTypes = {

};

export default Stock;