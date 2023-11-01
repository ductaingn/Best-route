import React from "react";
import { IconButton, List, ListItem, ListItemText } from "@mui/material";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { useStore } from "../../store";

const AddressList = (position) => {
  const [state, dispatch] = useStore();

  const handleDeletePosition = (position) => {
    dispatch({
      type: "DELETE_POS",
      position: position,
    });
  };

  return (
    <div>
      <List>
        {state.map((address, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <IconButton
                onClick={() => {
                  handleDeletePosition(address.position);
                }}
              >
                <DeleteRoundedIcon />
              </IconButton>
            }
          >
            <ListItemText primary={address.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default AddressList;
