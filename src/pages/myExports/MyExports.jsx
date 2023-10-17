import {Card } from '@tremor/react';
import MyExportsTable from './myExportsTable/MyExportsTable';
import OrderForm from './orderForm/OrderForm';
import Chart from './chart/Chart';
import MyLastOrders from './myLastOrders/MyLastOrders';

const MyExports = () => {

    return (
        <Card className='flex !rounded-none gap-4 p-4 '> 
            <MyExportsTable />
            <div className='flex flex-col gap-4 justify-start items-start w-2/4' >
                <div className='h-fit  flex gap-4 w-full'>
                    <OrderForm />
                    <Chart />
                </div>
                <MyLastOrders />
            </div>
        </Card>
    );
};


export default MyExports;