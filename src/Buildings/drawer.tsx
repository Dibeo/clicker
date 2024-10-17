/**   drawer.tsx   */
import React, { useEffect, useState } from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import "./drawer.css";

// Définir l'interface pour Building
interface Building {
  name: string;
  price: number;
  add_on: number;
}

// Define summary interface
interface SommaireProps {
  expanded: boolean;
}

// Composant Draw
const Draw: React.FC<SommaireProps> = ({ expanded }) => {
  const [buildings, setBuildings] = useState<Building[]>([]); // Typage de l'état

  // Importer l'image du cookie depuis le dossier public
  const cookieImage = "/logo192.png";

  // Fonction pour charger les données à partir du fichier JSON
  const fetchBuildings = async () => {
    try {
      const response = await fetch("buildings.json");
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
    <Drawer
      variant="persistent"
      anchor="left"
      open={expanded}
      style={{
        position: "fixed",
        left: expanded ? 0 : "-20%",
        width: "fit-content",
        height: "100%",
        boxShadow: "2px 0px 5px rgba(0,0,0,0.5)",
        transition: "left 0.3s ease",
        overflowY: "auto",
        paddingBottom: "50px",
      }}
    >
      <List
        className="List"
        style={{
          paddingTop: "70px",
        }}
      >
        {buildings
          .sort((a, b) => a.price - b.price)
          .map((building) => (
            <ListItem
              key={building.name}
              component="button"
              className="ListItem"
            >
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
    </Drawer>
  );
};

export default Draw;
