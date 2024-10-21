import { useState } from "react";
import { Button, Card, Typography } from "@mui/material";
import logo from "../cookie512.png";
import "./main.css";
import Cookies from "js-cookie";

interface CookieData {
  cookies: number;
  add_on_click: number;
}

export default function MainContent() {
  // Constantes pour le cookie
  const INITIAL_COOKIES = 0; // Nombre initial de cookies
  const ADD_ON_CLICK = 1; // Valeur à ajouter par clic

  // Variables d'état pour stocker différentes valeurs
  const [cookiesCount, setCookiesCount] = useState<number>(
    parseInt(Cookies.get("cookieCount")!) || 0
  );

  const [addOnClick] = useState<number>(ADD_ON_CLICK); // Pas besoin de setter ici

  const cookieData: CookieData = {
    cookies: cookiesCount, // Enregistre le nombre actuel de cookies
    add_on_click: ADD_ON_CLICK,
  };

  let get: string = Cookies.get("cookieCount")!;
  if (get != null) cookieData.cookies = parseInt(get);

  const updateCount = () => {
    let get: string = Cookies.get("cookieCount")!;
    cookieData.cookies = parseInt(get);
  };

  // Fonction pour créer un cookie contenant le nombre de cookies
  const createCookie = () => {
    Cookies.set("cookieData", cookieData.add_on_click.toString(), {
      expires: 365,
    });
    Cookies.set("cookieCount", cookieData.cookies.toString(), { expires: 365 });
  };

  return (
    <article>
      <Card className="card" sx={{ width: "fit-content", padding: "55px" }}>
        <Typography variant="h3">Cookie Clicker</Typography>
        <img src={logo} alt="Cookie logo" className="cookie-image" />

        <Typography variant="h6" style={{ marginBottom: "15px" }}>
          Cookies: {cookiesCount}
        </Typography>

        <Button
          variant="contained"
          onClick={() => {
            const newCookiesCount = cookiesCount + addOnClick; // Calcule le nouveau nombre de cookies
            cookieData.cookies += addOnClick;
            setCookiesCount(newCookiesCount); // Met à jour l'état avec le nouveau nombre
            createCookie(); // Met à jour le cookie avec le nouveau nombre de cookies
            updateCount();
          }}
        >
          Click me
        </Button>
      </Card>
    </article>
  );
}
