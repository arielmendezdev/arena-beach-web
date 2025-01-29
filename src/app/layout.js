"use client"

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";
import { createContext, useEffect, useState } from "react";
import { Box, createTheme, ThemeProvider } from "@mui/material";

export const contextGeneral = createContext();

export default function RootLayout({ children }) {
  const [themeChange, setThemeChenge] = useState("dark");

  const theme = createTheme({
    palette: {
      mode: themeChange,
    },
  });

  const toggleTheme = () => {
    setThemeChenge((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      document.body.className = newTheme;
      return newTheme;
    });
  };

  useEffect(() => {
    document.body.className = themeChange;
  }, [themeChange]);

  return (
    <html lang="en">
      <contextGeneral.Provider
        value={{
          themeChange,
          toggleTheme,
        }}
      >
        <body>
          <ThemeProvider theme={theme}>
            <NavBar />
            <Box sx={{ mt: 2 }}>
              <main>{children}</main>
            </Box>
            <Footer />
          </ThemeProvider>
        </body>
      </contextGeneral.Provider>
    </html>
  );
}
