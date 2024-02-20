import "./dashboard.scss";
import {
  Card,
  DonutChart,
  Flex,
  Icon,
  Legend,
  Metric,
  Text,
  Title,
} from "@tremor/react";
import Doc from "../../assets/icons/doc.svg?react";
import { keys } from "../../../query-key-factory";
import { getImports } from "../../api/imports";
import { useQuery } from "@tanstack/react-query";
import ImportIcon from "../../assets/icons/import.svg?react";
import LoadingDots from "../../components/LoadingDots/LoadingDots";

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

  const dataFormatter = (number) =>
    `${Intl.NumberFormat("us").format(number).toString()}%`;

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

  const valueFormatter = (number) =>
    `$ ${Intl.NumberFormat("us").format(number).toString()}`;

  const chartdata1 = [
    {
      year: 2020,
      Exportations: 2.04,
      Importations: 1.53,
    },
    {
      year: 2021,
      Exportations: 1.96,
      Importations: 1.58,
    },
    {
      year: 2022,
      Exportations: 1.96,
      Importations: 1.61,
    },
    {
      year: 2023,
      Exportations: 1.93,
      Importations: 1.61,
    },
    {
      year: 2024,
      Exportations: 1.88,
      Importations: 1.67,
    },
  ];

  const dataFormatter1 = (number) =>
    `${Intl.NumberFormat("us").format(number).toString()}%`;

  const { data: importsList, isLoading: importsListLoading } = useQuery(
    keys.imports({}),
    () => getImports()
  );

  const getTopGames = importsList
    ?.filter((e) => e.status === "Validée")
    .reduce((acc, currentV) => {
      const product = currentV.product.name;

      const findedProduct = acc.find((e) => e.game === product);

      if (!findedProduct) {
        return [
          ...acc,
          {
            product: product,
            orderQuantity: currentV.quantity,
            price: currentV.product.price,
          },
        ];
      } else {
        findedProduct.orderQuantity += currentV.quantity;
        return acc;
      }
    }, []);

  // calcul from getTopGames the total amount of sales

  const totalBuy = getTopGames?.reduce((acc, currentV) => {
    return acc + currentV.orderQuantity * currentV.price;
  }, 0);

  console.log(totalBuy);

  if (importsListLoading) {
    return <LoadingDots />;
  }

  return (
    <Card className="dashboard">
      <div className="top">
        <Card className="test" decorationColor="blue">
          <Flex justifyContent="start" className="space-x-4">
            <Icon icon={Doc} variant="light" size="xl" color={"blue"} />

            <div className="truncate">
              <Text>{`Commandes Octobre 2023`}</Text>

              <Metric className="truncate">36</Metric>
            </div>
          </Flex>
        </Card>
        <Card className="test" decorationColor="blue">
          <Flex justifyContent="start" className="space-x-4">
            <Icon icon={Doc} variant="light" size="xl" color={"blue"} />
            <div className="truncate">
              <Text>{`Commandes expédiées`}</Text>
              <Metric className="truncate">25</Metric>
            </div>
          </Flex>
        </Card>
        <Card className="test" decorationColor="blue">
          <Flex justifyContent="start" className="space-x-4">
            <Icon icon={ImportIcon} variant="light" size="xl" color={"blue"} />
            <div className="truncate">
              <Text>{`Importations à valider`}</Text>
              <Metric className="truncate">
                {
                  importsList?.filter((order) => order.status === "En attente")
                    .length
                }
              </Metric>
            </div>
          </Flex>
        </Card>
        <Card className="test" decorationColor="blue">
          <Flex justifyContent="start" className="space-x-4">
            <Icon icon={ImportIcon} variant="light" size="xl" color={"blue"} />
            <div className="truncate">
              <Text>{`Importations refusées`}</Text>
              <Metric className="truncate">
                {
                  importsList?.filter((order) => order.status === "Annulée")
                    ?.length
                }
              </Metric>
            </div>
          </Flex>
        </Card>
      </div>

      <div className="middle">
        <Card className="w-2/4 graph">
          <div className="flex justify-between">
            <Title>Importations</Title>
            <Title>{totalBuy} €</Title>
          </div>
          {/* <Title>Toutes les importations </Title> */}
          <div className="flex">
            <DonutChart
              className="mt-6 w-2/4"
              data={getTopGames}
              category="orderQuantity"
              index="product"
              showAnimation={true}
            />
            <div className=" w-full flex flex-col justify-center">
              <Legend
                className="mt-3"
                categories={getTopGames?.map((article) => article.product)}
              />
            </div>
          </div>
        </Card>
        <Card className="w-2/4 graph">
          <Title>Exportations</Title>
          <DonutChart
            className="mt-6"
            data={cities}
            category="sales"
            index="name"
            valueFormatter={valueFormatter}
            showAnimation={true}
            colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
          />
        </Card>
      </div>
    </Card>
  );
};

export default Dashboard;
