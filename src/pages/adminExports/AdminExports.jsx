import {Card } from '@tremor/react';
import ExportsTable from './exportsTable/ExportsTable';
import AdminChart from './adminChart/AdminChart';
import AdminChart2 from './adminChart2/AdminChart2';

const AdminExports = () => {


    // route : 


    return (
        <Card className='!rounded-none flex  flex-col gap-4 p-4 overflow-auto'>
            <Card className='h-2/4 overflow-hidden'>
                <ExportsTable />
            </Card>
            <div className='flex h-2/4 gap-4'>
                <Card className='h-full p-6'>
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