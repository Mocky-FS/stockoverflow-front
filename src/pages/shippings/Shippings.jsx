import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Card, Flex, Metric, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text, Title } from '@tremor/react';
import AdminReview from './adminReview/AdminReview';
import AdminChart from './adminChart/AdminChart';
import AdminChart2 from './adminChart2/AdminChart2';
// import './shippings.scss'

const Shippings = () => {




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
            {/* <div className='cards'>
                <Card decoration="top" className='recap' >
                    <Flex justifyContent="start" className="space-x-4">

                        <div className="truncate">
                            <Text>Commandes expédiées</Text>
                            <Metric className="truncate">5</Metric>
                        </div>
                    </Flex>
                </Card>
              
            </div>
            <Card className='card' decoration='top'>
                <Title>Historique des commandes expédiées</Title>
                
            </Card> */}
        </Card>
    );
};

Shippings.propTypes = {

};

export default Shippings;