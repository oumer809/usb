import React from "react";
import { Card, List, ListItem, Title } from "@tremor/react";

const cities = [
  {
    city: "Mekelle",
    rating: "2 open PR",
  },
  {
    city: "Adama",
    rating: "1 open PR",
  },
  {
    city: "Addis",
    rating: "5 open PR",
  },
  {
    city: "Dessie",
    rating: "4 open PR",
  },
  {
    city: "Dubai",
    rating: "3 open PR",
  },
  {
    city: "Semera",
    rating: "3 open PR",
  },
];

const ScoreList = () => {
  return (
    <Card className="max-w-full">
      <Title>Tremor's Hometowns</Title>
      <List>
        {cities.map((item) => (
          <ListItem key={item.city}>
            <span>{item.city}</span>
            <span>{item.rating}</span>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default ScoreList;
