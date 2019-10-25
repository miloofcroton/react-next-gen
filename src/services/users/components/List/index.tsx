import React from 'react';
import ListItem from './Item';
import { User } from 'services/users/data/types';

type Props = {
  items: User[];
};

const List: React.FunctionComponent<Props> = ({ items }) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
);

export default List;
