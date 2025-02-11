import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Yash',
      image:
        'https://wallpaperaccess.com/full/1994891.jpg',
      places: 1
    },
    {
      id: 'u2',
      name: 'Narendra Modi',
      image:
        'https://tse3.mm.bing.net/th?id=OIP.ysTzEXNYtxMsefvzPYQ2cwHaGO&pid=Api&P=0&h=180',
      places: 2
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
