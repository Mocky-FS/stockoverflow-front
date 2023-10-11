import { BadgeDelta, Card, Flex, Legend, List, ListItem, Select, Title } from '@tremor/react';
import OrderForm from './orderForm/OrderForm';
import MyLastOrders from './myLastOrders/MyLastOrders';
import Review from './review/Review';
import { DonutChart } from "@tremor/react";
import Chart from './chart/Chart';

const MyExports = () => {



    // const valueFormatter = (number) => `$ ${new Intl.NumberFormat("us").format(data).toString()}`;


    return (
        <Card className='flex !rounded-none gap-4 p-4 '> 
            {/* <Card decoration='top'  > */}
            <Review />
            {/* </Card> */}

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