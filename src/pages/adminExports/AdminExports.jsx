import {Card } from '@tremor/react';
import AdminReview from './adminReview/AdminReview';
import AdminChart from './adminChart/AdminChart';
import AdminChart2 from './adminChart2/AdminChart2';

const AdminExports = () => {




    return (
        <Card className='!rounded-none flex  flex-col gap-4 p-4'>
            <Card className='h-2/4'>
                <AdminReview />
            </Card>
            <div className='flex h-2/4 gap-4'>
                <Card className='h-full'>
                    <AdminChart />
                </Card>
                <Card className='h-full'>
                    <AdminChart2 />
                </Card>
            </div>
        </Card>
    );
};


export default AdminExports;