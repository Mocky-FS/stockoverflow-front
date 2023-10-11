import { BadgeDelta, Button, Card, Flex, Metric, ProgressBar, Tab, TabGroup, TabList, Text, Title } from '@tremor/react';
import React, { useState } from 'react';

const AdminChart = () => {


    const products = [
        {
            title: "FC 2024",
            value: 38,
            metric: "150",
            location: "A",
        },
        {
            title: "Call of Duty",
            value: 34,
            metric: "150",
            location: "A",
        },
        {
            title: "F1 2024",
            value: 28,
            metric: "150",
            location: "A",
        },
        {
            title: "Hogwarts Legacy",
            value: 38,
            metric: "150",
            location: "A",
        },
        {
            title: "Baldur's Gate III",
            value: 34,
            metric: "150",
            location: "A",
        },
        {
            title: "Mortal Kombat 1",
            value: 28,
            metric: "150",
            location: "A",
        },
        {
            title: "Starfield",
            value: 82,
            metric: "150",
            location: "B",
        },
        {
            title: "Assassin's Creed",
            value: 10,
            metric: "150",
            location: "B",
        },
        {
            title: "Diablo V",
            value: 8,
            metric: "150",
            location: "B",
        },
        {
            title: "Cyberpunk 2077",
            value: 82,
            metric: "150",
            location: "B",
        },
        {
            title: "Street Fighter 6",
            value: 10,
            metric: "150",
            location: "B",
        },
        {
            title: "Resident Evil 4",
            value: 8,
            metric: "150",
            location: "B",
        },
    ];



    const [selectedIndex, setSelectedIndex] = useState(0);
    const selectedLocation = selectedIndex === 0 ? "A" : "B";





    return (
        <div className="w-full h-full">
            <Title>Détails</Title>
            {/* <Flex alignItems="start">
                <Text>Total exportation</Text>
                <BadgeDelta deltaType="moderateIncrease">23.1%</BadgeDelta>
            </Flex> */}
            {/* <Flex justifyContent="start" alignItems="baseline" className="space-x-3 truncate">
                <Metric>$ 442,276</Metric>
                <Text>from $ 382,482</Text>
            </Flex> */}
            <TabGroup index={selectedIndex} onIndexChange={setSelectedIndex} className="mt-6">
                <TabList>
                    <Tab>Jeux disque </Tab>
                    <Tab>Jeux numérique</Tab>
                </TabList>
            </TabGroup>
            {products
                .filter((item) => item.location === selectedLocation)
                .map((item) => (
                    <div key={item.title} className="space-y-2 mt-4">
                        <Flex>
                            <Text>{item.title}</Text>
                            <Text>{`${item.value}% (${item.metric})`}</Text>
                        </Flex>
                        <ProgressBar value={item.value} />
                    </div>
                ))}
            {/* <Flex className="mt-6 pt-4 border-t">
                <Button size="xs" variant="light" iconPosition="right">
                    View more
                </Button>
            </Flex> */}
        </div>
    );
};

export default AdminChart;