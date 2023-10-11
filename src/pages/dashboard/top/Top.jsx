import { Flex, Icon, Metric, Text, Card } from '@tremor/react';
import Doc from '../../../assets/icons/doc.svg?react'


const Top = () => {

    return (

        <div className='flex justify-start gap-4'>
            <Card className='p-4'>
                    <Flex justifyContent="start" className="space-x-4">
                        <Icon icon={Doc} variant="light" size="xl" color={'blue'} />
                        <div className="truncate">
                            <Text>{`Commandes Octobre 2023`}</Text>
                            <Metric className="truncate">36</Metric>
                        </div>
                    </Flex>
                </Card>
                <Card >
                    <Flex justifyContent="start" className="space-x-4">
                        <Icon icon={Doc} variant="light" size="xl" color={'blue'} />
                        <div className="truncate">
                            <Text>{`Commandes expédiées`}</Text>
                            <Metric className="truncate">25</Metric>
                        </div>
                    </Flex>
                </Card>
                <Card >
                    <Flex justifyContent="start" className="space-x-4">
                        <Icon icon={Doc} variant="light" size="xl" color={'blue'} />
                        <div className="truncate">
                            <Text>{`Commande à valider`}</Text>
                            <Metric className="truncate">5</Metric>
                        </div>
                    </Flex>
                </Card>
                <Card >
                    <Flex justifyContent="start" className="space-x-4">
                        <Icon icon={Doc} variant="light" size="xl" color={'blue'} />
                        <div className="truncate">
                            <Text>{`Commandes refusées`}</Text>
                            <Metric className="truncate">0</Metric>
                        </div>
                    </Flex>
                </Card>
        </div>
    );
};

export default Top;