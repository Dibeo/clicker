import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Drawer, List, ListItem, ListItemText, AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

// Styles pour le Drawer
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{ open?: boolean }>(({ theme, open }) => ({
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

// Définir l'interface pour Building
interface Building {
  name: string;
  price: number;
  add_on: number;
}

const Draw = () => {
  const [open, setOpen] = useState(false);
  const [buildings, setBuildings] = useState<Building[]>([]); // Typage de l'état

  // Fonction pour charger les données à partir du fichier JSON
  const fetchBuildings = async () => {
    try {
      const response = await fetch('/buildings.json'); // Assurez-vous que le chemin est correct
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: Building[] = await response.json();
      setBuildings(data);
    } catch (error) {
      console.error('Error fetching buildings:', error);
    }
  };

  useEffect(() => {
    fetchBuildings();
  }, []);

  return (
      <Drawer variant="persistent" anchor="left" open={open}>
        <List>
          {buildings.map((building) => (
            // Utilisation de "li" comme composant
            <ListItem key={building.name} component="button">  
              <ListItemText 
                primary={building.name} 
                secondary={`Price: $${building.price.toLocaleString()}, Add-on: $${building.add_on.toLocaleString()}`} 
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
  );
};

export default Draw;
