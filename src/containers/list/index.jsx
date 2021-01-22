import React, { useState, useEffect, useCallback } from "react";
import { List, Picker } from "antd-mobile";

const Item = List.Item;
const fruits = [
  { label: "苹果", value: "1" },
  { label: "椰子", value: "2" },
];
const types = [
  { label: "所有", value: "0" },
  { label: "北方", value: "1" },
  { label: "南方", value: "2" },
];

const FruitList = () => {
  const [fruit, setFruit] = useState(fruits);
  const [type, setType] = useState("0");

  const changeType = (e) => {
    setType(e[0]);
  };

  useEffect(() => {
    const targetFruits = type !== "0" ? fruits.filter((item) => item.value === type) : fruits;
    setFruit(targetFruits);
  }, [type]);

  return (
    <List className="my-list">
      <Picker data={types} title="类型" onChange={changeType} value={[type]}>
        <List.Item arrow="horizontal">类型</List.Item>
      </Picker>
      {fruit.map((item, k) => {
        return <Item key={k}>{item.label}</Item>;
      })}
    </List>
  );
};

export default FruitList;
