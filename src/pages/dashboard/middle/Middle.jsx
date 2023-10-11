import { AreaChart, DonutChart, Title , Card} from '@tremor/react';
import React from 'react';

const Middle = () => {


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
    return (
        <div >
            <Card>
                    <Title>Newsletter revenue over time (USD)</Title>
                    <AreaChart
                        // className="h-72 mt-4"
                        data={chartdata}
                        index="date"
                        categories={["SemiAnalysis", "The Pragmatic Engineer"]}
                        colors={["indigo", "cyan"]}
                        valueFormatter={dataFormatter}
                    />
                </Card>
                <Card >
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
    );
};

export default Middle;