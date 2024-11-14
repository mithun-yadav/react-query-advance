import React from "react";
import { useQueries } from "@tanstack/react-query";

const Parallel = () => {
  //paralle query or dynamic api calls
  const [userIds, setUserIds] = React.useState([1]);
  const [count, setCount] = React.useState(1);
  const userQueries = useQueries({
    queries: userIds.map((id) => {
      return {
        queryKey: ["user", id],
        queryFn: userIds.map(async (id) => {
          const data = await fetch(`https://dummyjson.com/users/${id}`)
            .then((res) => res.json())
            .then((res) => {
              // console.log(res);
              return res;
            });
          return data;
        }),
      };
    }),
  });

  return (
    <div>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
          setUserIds((prev) => {
            return [...prev, count];
          });
        }}
      >
        Load more
      </button>

      {userIds.map((id) => (
        <h1 key={id}>{id}</h1>
      ))}
    </div>
  );
};

export default Parallel;
