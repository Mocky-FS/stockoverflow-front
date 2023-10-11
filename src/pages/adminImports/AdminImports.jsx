import { Card, Tab, TabGroup, TabList, TabPanel, TabPanels, Title } from '@tremor/react';

import AdminReview from './adminReview/AdminReview';
import AddProduct from './addProduct/AddProduct';
import AddCategory from './addCategory/AddCategory';
import { useState } from 'react';

const AdminImports = () => {

    const [index, setIndex] = useState(0)

    return (
        <Card className='!rounded-none flex gap-4 p-4'>
            <Card className='w-3/4'>
                <AdminReview />
            </Card>
            <div className='flex flex-col w-1/4 gap-4' >
                <div className='h-2/4 flex gap-4'>
                    <Card>
                        <TabGroup onIndexChange={(val)=> setIndex(val)}>
                            <TabList>
                                <Tab >Ajouter produit</Tab>
                                <Tab >Ajouter catégorie</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <AddProduct index={index}/>
                                </TabPanel>
                                <TabPanel>
                                    <AddCategory index={index}/>
                                </TabPanel>
                            </TabPanels>
                        </TabGroup>
                    </Card>
                </div>
                <Card className='h-2/4 w-full'>
                    <Title>test</Title>
                </Card>
            </div>
        </Card>

    );
};

export default AdminImports;