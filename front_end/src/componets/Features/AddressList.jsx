import React, {createContext, useContext} from "react";
import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { useStore } from "../../store";
import RouteContext from "../../context/RouteContext";

export const dataContext = createContext();

const AddressList = () => {
  const [state, dispatch] = useStore();
  const { setRoute } = useContext(RouteContext)

  const colors = ["#e53935", "#5e35b1", "#039be5", "#43a047", "#ffb300"];

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
                  setRoute([])
                }}
              >
                <DeleteRoundedIcon />
              </IconButton>
            }
          >
            <ListItemIcon>
              <LocationOnRoundedIcon style={{ color: colors[index % 5] }} />
            </ListItemIcon>
            <ListItemText primary={address.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default AddressList;
