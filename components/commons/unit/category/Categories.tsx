"use client";
import React from "react";
import Container from "../../layout/container";
import { TbBeach } from "react-icons/tb";
import { GiWindmill } from "react-icons/gi";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This property is close to the beach",
  },
];

const Categories = () => {
  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto"></div>
    </Container>
  );
};

export default Categories;
