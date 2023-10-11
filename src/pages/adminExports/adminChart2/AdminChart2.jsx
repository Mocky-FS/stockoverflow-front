import { BarChart, Subtitle, Title } from "@tremor/react";


const AdminChart2 = () => {

    const chartdata = [
        {
            name: "FC 2024",
            "Quantité": 2488,
        },
        {
            name: "Call of duty",
            "Quantité": 1445,
        },
        {
            name: "Assassin's Creed",
            "Quantité": 743,
        },
        {
            name: "Assassin's Creed",
            "Quantité": 743,
        },
        {
            name: "Assassin's Creed",
            "Quantité": 743,
        },
    ];


    return (
        <div className='h-full w-full flex flex-col'>
            <Title>Classement TOP 5  jeux</Title>
            <Subtitle> Nombre d'exportations par jeux  </Subtitle>
              
           
            <BarChart
                className="mt-6 h-4/4"
                data={chartdata}
                index="name"
                categories={[ "Quantité"]}
                colors={["blue"]}
                //   valueFormatter={valueFormatter}
                // yAxisWidth={}
            />
        </div>
    );
};

export default AdminChart2;