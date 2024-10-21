import { colors, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import React, { useEffect, useState } from "react";
import { builds } from "../data/buildings";

interface Building {
  name: string;
  price: number;
  add_on: number;
}

const Aside: React.FC = () => {

  // Importer l'image du cookie depuis le dossier public
  const cookieImage = "logo192.png";

  return (
    <List
      className="List"
    >
      {builds()
        .sort((a, b) => a.price - b.price)
        .map((building) => (
          <ListItemButton key={building.name} className="ListItem" style={{borderRadius:"15px", marginBottom:"3px"}}>
            <ListItemText style={{color: "#1B5299"}}
              primary={building.name}
              secondary={
                <>
                  Price:{" "}
                  {building.price.toLocaleString()}
                  <img
                    src={cookieImage}
                    alt="cookie"
                    style={{ width: "20px", verticalAlign: "middle" }}
                  /><br/>Add-on:{" "}
                  {building.add_on.toLocaleString()}
                  <img
                    src={cookieImage}
                    alt="cookie"
                    style={{ width: "20px", verticalAlign: "middle" }}
                  />
                </>
              }
            />
          </ListItemButton>
        ))}
    </List>
  );
};

export default Aside;
