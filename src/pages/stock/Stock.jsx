

import OrderForm from './orderForm/OrderForm';
import LastOrders from './lastOrders/LastOrders';
import Review from './review/Review';
import { Card } from '@tremor/react';

const Stock = () => {

    // const criticalStock = data.filter(item => item.quantity < 50).length;
    // const lowStock = data.filter(item => item.quantity >= 50 && item.quantity < 100).length;
    // const correctStock = data.filter(item => item.quantity >= 100).length;


    return (
        <Card className=' flex !rounded-none gap-4 p-4'>
            <Review />
            <div className='flex flex-col gap-4 w-2/4 '>
                <Card className='h-2/4 w-full flex flex-col items-center ' >
                    <OrderForm />
                </Card>
                {/* <Card className='h-full overflow-hidden' > */}
                    <LastOrders />
                {/* </Card> */}
            </div>
        </Card>
    );
};

Stock.propTypes = {

};

export default Stock;