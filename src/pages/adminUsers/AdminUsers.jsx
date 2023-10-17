import { Card, } from '@tremor/react';
import UsersTable from './usersTable/UsersTable';
import AdminCreateUser from './adminCreateUser/AdminCreateUser';


const AdminUsers = () => {

    return (
        <Card className='!rounded-none flex gap-4 p-4'>

            <Card className='w-3/4'>
                <UsersTable />
            </Card>
            <div className='flex flex-col gap-4 w-1/4'>
                <Card className='h-2/4 '>
                    <AdminCreateUser />
                </Card>
                <Card className='h-2/4'>
                </Card>
            </div>
        </Card>
    );
};


export default AdminUsers;