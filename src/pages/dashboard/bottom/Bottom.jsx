import { Card, DonutChart, LineChart, Title } from '@tremor/react';

const Bottom = () => {

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

    const dataFormatter1 = (number) => `${Intl.NumberFormat("us").format(number).toString()}%`;



    return (
        <div >
            <Card className="w-1/4  ">
                <Title>Importations</Title>
                <DonutChart
                    className="mt-6"
                    data={cities}
                    category="sales"
                    index="name"

                    colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
                />
            </Card>

            <Card >
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
    );
};

export default Bottom;