import React from "react";

const getUser = async (userId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  if (!res.ok) throw Error("failed to fetch getuser");
  return res.json();
};

export default getUser;
