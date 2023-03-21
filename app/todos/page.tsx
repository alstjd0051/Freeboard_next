import React from "react";
import TodosList from "./TodoList";

type Props = {};

const Todos = (props: Props) => {
  return (
    <div>
      {/* @ts-ignore */}
      <TodosList />
    </div>
  );
};

export default Todos;
