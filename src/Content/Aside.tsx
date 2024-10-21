import { List, ListItem, ListItemText } from "@mui/material";
import React, { useEffect, useState } from "react";

interface Building {
  name: string;
  price: number;
  add_on: number;
}

const Aside: React.FC = () => {
  const [buildings, setBuildings] = useState<Building[]>([]); // Typage de l'état

  // Importer l'image du cookie depuis le dossier public
  const cookieImage = "/logo192.png";

  // Fonction pour charger les données à partir du fichier JSON
  const fetchBuildings = async () => {
    try {
      const response = await fetch("buildings.json", {method: "GET"});
      console.log(response);
      const data: Building[] = await response.json();
      setBuildings(data);
    } catch (error) {
      console.error("Error fetching buildings:", error);
    }
  };

  useEffect(() => {
    fetchBuildings();
  }, []);
  
  return (
    <List
      className="List"
      style={{
        paddingTop: "70px",
      }}
    >
      {buildings
        .sort((a, b) => a.price - b.price)
        .map((building) => (
          <ListItem key={building.name} component="button" className="ListItem">
            <ListItemText
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
