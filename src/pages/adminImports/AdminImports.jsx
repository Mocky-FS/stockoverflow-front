import { Card, DonutChart, Legend, LineChart, Tab, TabGroup, TabList, TabPanel, TabPanels, Text, Title } from '@tremor/react';

import ImportsTable from './importsTable/ImportsTable';
import AddProduct from './addProduct/AddProduct';
import AddCategory from './addCategory/AddCategory';
import { useState } from 'react';
import { keys } from '../../../query-key-factory';
import { getImports } from '../../api/imports';
import { useQuery } from '@tanstack/react-query';


const AdminImports = () => {

    const [index, setIndex] = useState(0)




    return (
        <Card className='!rounded-none flex gap-4 p-4'>
            <ImportsTable />
            <div className='flex flex-col w-1/4 gap-4' >
                <div className='h-2/4 flex gap-4'> 
                     <Card>
                        <TabGroup onIndexChange={(val) => setIndex(val)}>
                            <TabList>
                                <Tab >Ajouter produit</Tab>
                                <Tab >Ajouter catégorie</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <AddProduct index={index} />
                                </TabPanel>
                                <TabPanel>
                                    <AddCategory index={index} />
                                </TabPanel>
                            </TabPanels>
                        </TabGroup>
                    </Card> 
                </div>
                <Card className='h-2/4 w-full'>

                </Card>
            </div> 
        </Card>

    );
};

export default AdminImports;