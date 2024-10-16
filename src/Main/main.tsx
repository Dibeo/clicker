import React, { useState, useEffect } from "react";
import { Button, Card, Typography } from "@mui/material";
import logo from "../cookie512.png";
import "./main.css";
import Cookies from "universal-cookie";

interface CookieData {
  cookies: number;
  add_on_click: number;
}

export default function MainContent() {
  // Constantes pour le cookie
  const INITIAL_COOKIES = 0; // Nombre initial de cookies
  const ADD_ON_CLICK = 1; // Valeur à ajouter par clic

  // Création d'une instance de cookies
  const cookies = new Cookies();

  // Variables d'état pour stocker différentes valeurs
  const [cookiesCount, setCookiesCount] = useState<number>(INITIAL_COOKIES);
  const [addOnClick] = useState<number>(ADD_ON_CLICK); // Pas besoin de setter ici

  // Fonction pour créer un cookie contenant le nombre de cookies
  const createCookie = () => {
    const cookieData: CookieData = {
      cookies: cookiesCount, // Enregistre le nombre actuel de cookies
      add_on_click: ADD_ON_CLICK,
    };

    // Convertir l'objet en JSON pour le stocker dans le cookie
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1); // Expire dans 1 an

    cookies.set("cookieData", cookieData, { path: "/", expires });
    console.log("Cookie créé avec succès:", cookieData);
  };

  // Fonction pour supprimer le cookie
  const deleteCookie = () => {
    cookies.remove("cookieData", { path: "/" });
    setCookiesCount(INITIAL_COOKIES);
    
    console.log("Cookie supprimé");
  };

  return (
    <Card className="card" sx={{ width: "60%" }}>
      <Typography variant="h5">Cookie Clicker</Typography>
      <img src={logo} alt="Cookie logo" className="cookie-image" />

      <Typography variant="h6">Cookies: {cookiesCount}</Typography>

      <Button
        variant="contained"
        onClick={() => {
          const newCookiesCount = cookiesCount + addOnClick; // Calcule le nouveau nombre de cookies
          setCookiesCount(newCookiesCount); // Met à jour l'état avec le nouveau nombre
          createCookie(); // Met à jour le cookie avec le nouveau nombre de cookies
          console.log("Cookies mis à jour:", newCookiesCount); // Affiche le nouveau nombre de cookies
        }}
      >
        Click me
      </Button>
    </Card>
  );
}
