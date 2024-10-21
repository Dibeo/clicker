import { colors, List, ListItem, ListItemText } from "@mui/material";
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
          <ListItem key={building.name} component="button" className="ListItem">
            <ListItemText style={{color: "#FF5733"}}
              primary={building.name}
              secondary={
                <>
                  Price:
                  {building.price.toLocaleString()}
                  <img
                    src={cookieImage}
                    alt="cookie"
                    style={{ width: "20px", verticalAlign: "middle" }}
                  />{" "}
                  , Add-on:
                  {building.add_on.toLocaleString()}
                  <img
                    src={cookieImage}
                    alt="cookie"
                    style={{ width: "20px", verticalAlign: "middle" }}
                  />
                </>
              }
            />
          </ListItem>
        ))}
    </List>
  );
};

export default Aside;
