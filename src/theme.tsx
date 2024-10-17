import React from "react";
import { createTheme } from "@mui/material";

const theme = createTheme({
  cssVariables: false, // Utilisation des variables CSS désactivée ici, à activer si nécessaire
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#FF5733", // Couleur principale dans le thème clair (orange vif)
        },
        secondary: {
          main: "#33C1FF", // Couleur secondaire dans le thème clair (bleu clair)
        },
        background: {
          default: "#FFFFFF", // Fond par défaut en mode clair
          paper: "#F5F5F5", // Fond des cartes ou des éléments comme ListItem
        },
        text: {
          primary: "#000000", // Texte principal en noir pour une bonne lisibilité
          secondary: "#555555", // Texte secondaire légèrement grisé
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#FFFFFF", // Couleur principale dans le thème sombre (bleu)
        },
        secondary: {
          main: "#FFC300", // Couleur secondaire dans le thème sombre (jaune doré)
        },
        background: {
          default: "#252525", // Fond par défaut en mode sombre (presque noir)
          paper: "#1E1E1E", // Fond des cartes ou des éléments comme ListItem (gris foncé)
        },
        text: {
          primary: "#FFFFFF", // Texte principal en blanc pour le contraste
          secondary: "#BBBBBB", // Texte secondaire gris clair
        },
      },
    },
  },
  components: {
    MuiListItem: {
      styleOverrides: {
        root: {
          backgroundColor: "var(--listItem-background)", // Variable de background adaptée aux thèmes
          "&:hover": {
            backgroundColor: "var(--listItem-hover-background)", // Variable pour le hover
          },
        },
      },
    },
  },
});

export default theme;
