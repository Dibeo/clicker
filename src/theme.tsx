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
          main: "#1976D2",
        },
        secondary: {
          main: "#f50057",
        },
        background: {
          default: "#252525",
          paper: "#3d3d3d",
        },
        text: {
          primary: "rgba(177,177,177,0.87)",
          secondary: "rgba(142,141,141,0.87)",
          disabled: "rgba(206,206,206,0.38)",
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
