import React from "react";
import PropTypes from "prop-types";
import { List, Item, Button } from "./ContactList.styles";

export const ContactList = ({ options, searchValue, onDelete }) => {
  return (
    <List>
      {options
        .filter((el) => {
          return el.name.toLowerCase().includes(searchValue.toLowerCase());
        })
        .map(({ name, number, id }) => {
          return (
            <Item key={id}>
              {name}: {number}
              <Button onClick={() => onDelete(id)}>Delete</Button>
            </Item>
          );
        })}
    </List>
  );
};

ContactList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  searchValue: PropTypes.string,
  onDelete: PropTypes.func,
};
