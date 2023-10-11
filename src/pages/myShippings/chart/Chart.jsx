import { Badge, BadgeDelta, Card, DonutChart, Flex, Legend, List, ListItem, Title } from '@tremor/react';

const Chart = () => {

    const data = [
        {
            name: 'Alex',
            export: 21
        },
        {
            name: 'Gael',
            export: 13
        },
        {
            name: 'Joris',
            export: 25
        },
        {
            name: 'Arnaud',
            export: 21
        },
    ]


    return (
        <Card className="w-2/4 mx-auto overflow-auto  flex flex-col" >
            
                <Title>Recap commandes expediées</Title>

            <Legend categories={data.map((user) => user.name)} className="my-2 self-center" />
            <DonutChart
                data={data}
                category="export"
                index="name"
                // className="mt-2"
            />
            <List>
                {data.map((user) => (
                    <ListItem key={user.name}>
                        {user.name}
                        <Badge size="xs">
                            {user.export} 
                        </Badge>
                        
                    </ListItem>
                ))}
            </List>
        </Card>
    );
};

export default Chart;