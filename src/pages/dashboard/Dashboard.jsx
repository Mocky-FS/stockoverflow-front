
import './dashboard.scss'
import { AreaChart, Badge, BarChart, Card, DonutChart, Flex, Icon, LineChart, Metric, Subtitle, Text, Title } from '@tremor/react';
import Doc from '../../assets/icons/doc.svg?react'

const Dashboard = () => {

    const chartdata = [
        {
            date: "Jan 22",
            SemiAnalysis: 120,
            "The Pragmatic Engineer": 122,
        },
        {
            date: "Feb 22",
            SemiAnalysis: 86,
            "The Pragmatic Engineer": 90,
        },
        {
            date: "Mar 22",
            SemiAnalysis: 145,
            "The Pragmatic Engineer": 123,
        },
        {
            date: "Apr 22",
            SemiAnalysis: 89,
            "The Pragmatic Engineer": 43,
        },
        {
            date: "May 22",
            SemiAnalysis: 24,
            "The Pragmatic Engineer": 24,
        },
        {
            date: "Jun 22",
            SemiAnalysis: 74,
            "The Pragmatic Engineer": 70,
        },
    ];

    const dataFormatter = (number) => `${Intl.NumberFormat("us").format(number).toString()}%`;

    const cities = [
        {
            name: "A4",
            sales: 1200,
        },
        {
            name: "A3",
            sales: 650,
        },
        {
            name: "Papier Bulle",
            sales: 2000,
        },
        {
            name: "San Francisco",
            sales: 550,
        },
        {
            name: "Singapore",
            sales: 1200,
        },
        {
            name: "Zurich",
            sales: 180,
        },
    ];

    const valueFormatter = (number) => `$ ${Intl.NumberFormat("us").format(number).toString()}`;


    const chartdata1 = [
        {
            year: 2020,
            "Exportations": 2.04,
            "Importations": 1.53,
        },
        {
            year: 2021,
            "Exportations": 1.96,
            "Importations": 1.58,
        },
        {
            year: 2022,
            "Exportations": 1.96,
            "Importations": 1.61,
        },
        {
            year: 2023,
            "Exportations": 1.93,
            "Importations": 1.61,
        },
        {
            year: 2024,
            "Exportations": 1.88,
            "Importations": 1.67,
        },
    ];

    const dataFormatter1 = (number) => `${Intl.NumberFormat("us").format(number).toString()}%`;




    return (

        <Card className='dashboard'>

            <div className='top'>
                <Card decoration="top" className='test' decorationColor='blue' >
                    <Flex justifyContent="start" className="space-x-4">
                        <Icon icon={Doc} variant="light" size="xl" color={'blue'} />
                        <div className="truncate">
                            <Text>{`Commandes Octobre 2023`}</Text>
                            <Metric className="truncate">36</Metric>
                        </div>
                    </Flex>
                </Card>
                <Card decoration="top" className='test' decorationColor='blue' >
                    <Flex justifyContent="start" className="space-x-4">
                        <Icon icon={Doc} variant="light" size="xl" color={'blue'} />
                        <div className="truncate">
                            <Text>{`Commandes expédiées`}</Text>
                            <Metric className="truncate">25</Metric>

                        </div>
                    </Flex>
                </Card>
                <Card decoration="top" className='test' decorationColor='blue' >
                    <Flex justifyContent="start" className="space-x-4">
                        <Icon icon={Doc} variant="light" size="xl" color={'blue'} />
                        <div className="truncate">
                            <Text>{`Commande à valider`}</Text>
                            <Metric className="truncate">5</Metric>
                        </div>
                    </Flex>
                </Card>
                <Card decoration="top" className='test' decorationColor='blue' >
                    <Flex justifyContent="start" className="space-x-4">
                        <Icon icon={Doc} variant="light" size="xl" color={'blue'} />
                        <div className="truncate">
                            <Text>{`Commandes refusées`}</Text>
                            <Metric className="truncate">0</Metric>
                        </div>
                    </Flex>
                </Card>
                
            </div>
            

            <div className='middle'>

                <Card className='w-3/4 graph' decoration="top">
                    <Title>Newsletter revenue over time (USD)</Title>
                    <AreaChart
                        className="h-72 mt-4"
                        data={chartdata}
                        index="date"
                        categories={["SemiAnalysis", "The Pragmatic Engineer"]}
                        colors={["indigo", "cyan"]}
                        valueFormatter={dataFormatter}
                    />
                </Card>
                <Card className="w-1/4 graph"decoration="top" >
                    <Title>Exportations</Title>
                    <DonutChart
                        className="mt-6"
                        data={cities}
                        category="sales"
                        index="name"
                        valueFormatter={valueFormatter}
                        colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
                    />
                </Card>


            </div>
            <div className='bottom'>
                <Card className="w-1/4 graph "decoration="top">
                    <Title>Importations</Title>
                    <DonutChart
                        className="mt-6"
                        data={cities}
                        category="sales"
                        index="name"
                        valueFormatter={valueFormatter}
                        colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
                    />
                </Card>

                <Card className='w-3/4 graph'decoration="top">
                    <Title>Exportations / Importations depuis (2020 à 2023)</Title>
                    <LineChart
                        className="mt-6"
                        data={chartdata1}
                        index="year"
                        categories={["Exportations", "Importations"]}
                        colors={["emerald", "gray"]}
                        valueFormatter={dataFormatter1}
                        yAxisWidth={40}
                    />
                    
                </Card>
            </div>
        </Card>
    );
};

export default Dashboard;