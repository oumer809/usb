import React, { useState } from "react";
import {
  Button,
  Card,
  DonutChart,
  Flex,
  TabGroup,
  Tab,
  TabList,
  Bold,
  Divider,
  List,
  ListItem,
  Metric,
  Text,
  Title,
} from "@tremor/react";

import {
  ArrowRightIcon,
  ChartPieIcon,
  ViewListIcon,
} from "@heroicons/react/outline";

const stocks = [
  {
    name: "Off Running AG",
    value: 60456,
    performance: "6.1%",
    deltaType: "increase",
  },
  {
    name: "Clothes store.",
    value: 39789,
    performance: "1.2%",
    deltaType: "moderateDecrease",
  },
  {
    name: "Online Shop.",
    value: 12567,
    performance: "2.3%",
    deltaType: "moderateIncrease",
  },
  {
    name: "GTH Ltd.",
    value: 19421,
    performance: "0.5%",
    deltaType: "moderateDecrease",
  },
  {
    name: "Mesfin Tech Inc ",
    value: 19432,
    performance: "3.4%",
    deltaType: "decrease",
  },
];

const dataFormatter = (number) => {
  if (typeof number !== 'number' || isNaN(number)) {
    return "Br 0"; // Default value if input is invalid
  }
  const formattedValue= Intl.NumberFormat("us").format(number);
  return "Br " + formattedValue;
};

const SalesItem = ({number}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  

  return (
    <Card className="max-w-full mx-auto">
      <Flex className="space-x-8 flex-col lg:flex-row">
        <Title>Overview</Title>
        <TabGroup index={selectedIndex} onIndexChange={setSelectedIndex}>
          <TabList variant="solid">
            <Tab icon={ChartPieIcon}>Chart</Tab>
            <Tab icon={ViewListIcon}>List</Tab>
          </TabList>
        </TabGroup>
      </Flex>
      <Text className="mt-8">Portfolio Value</Text>
      <Metric>Br 151,665</Metric>
      <Divider />
      <Text className="mt-8">
        <Bold>Asset Allocation</Bold>
      </Text>
      <Text>1 Asset class - 5 Holdings</Text>
      {selectedIndex === 0 ? (
        <DonutChart
          data={stocks}
          valueFormatter={dataFormatter}
          showAnimation={false}
          category="value"
          index="name"
          className="mt-6"
        />
      ) : (
        <>
          <Flex className="mt-8" justifyContent="between">
            <Text className="truncate">
              <Bold>Stocks</Bold>
            </Text>
            <Text>Since transaction</Text>
          </Flex>
          <List className="mt-4">
            {stocks.map((stock) => (
              <ListItem key={stock.name}>
                <Text>{stock.name}</Text>
                <Flex className="space-x-2" justifyContent="end">
                  <Text>
                    Br {Intl.NumberFormat("us").format(stock.value).toString()}
                  </Text>
                </Flex>
              </ListItem>
            ))}
          </List>
        </>
      )}
      <Flex className="mt-6 pt-4 border-t">
        <Button
          size="xs"
          variant="light"
          icon={ArrowRightIcon}
          iconPosition="right"
        >
          View more
        </Button>
      </Flex>
    </Card>
  );
};

export default SalesItem;
