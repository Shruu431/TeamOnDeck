import React from "react";
import { Box, List, ListItem, ListItemText } from "@mui/material";

const ProfileModal = () => {
  return (
    <Box>
      <List className="profileModal">
        <ListItem className="list">
          <ListItemText
            primary="Change Password"
            data-testid="changePassword"
          />
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Box>
  );
};

export { ProfileModal };
