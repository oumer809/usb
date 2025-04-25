import React from "react";
import { BadgeDelta, Card, Flex, Metric, Text } from "@tremor/react";

const CardItem = () => {
  return (
    <>
    <Card className="w-xs" decoration="top" decorationColor="indigo">
      <Flex justifyContent="between" alignItems="center">
        <Text>Revenue</Text>
        <BadgeDelta deltaType="moderateDecrease">-12.5%</BadgeDelta>
      </Flex>
      <Metric>Birr 44,747</Metric>
      <Text className="pt-2">Compare to last year (2024)</Text>
    </Card>
    <Card className="w-xs" decoration="top" decorationColor="indigo">
      <Flex justifyContent="between" alignItems="center">
        <Text>Sales</Text>
        <BadgeDelta deltaType="moderateIncrease">+10.2%</BadgeDelta>
      </Flex>
      <Metric>Birr 54,743</Metric>
      <Text className="pt-2">Compare to last year (2024)</Text>
    </Card>
    <Card className="w-xs" decoration="top" decorationColor="indigo">
      <Flex justifyContent="between" alignItems="center">
        <Text>Costs</Text>
        <BadgeDelta deltaType="moderateIncrease">+32.5%</BadgeDelta>
      </Flex>
      <Metric>Birr 64,300</Metric>
      <Text className="pt-2">Compare to last year (2024)</Text>
    </Card>
    </>
  );
};

export default CardItem;
