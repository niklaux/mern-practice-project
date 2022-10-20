import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Nikki Ocer",
      image:
        "data:image/jpeg;base64,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",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;