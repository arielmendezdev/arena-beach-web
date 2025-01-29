"use client";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import Link from "next/link";
import Menu from "@mui/material/Menu";
import { useContext, useState } from "react";
import "../app/globals.css";
import Socials from "./Socials";
import { contextGeneral } from "../app/layout";


export default function NavBar() {

  const { themeChange } = useContext(contextGeneral);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        elevation={0}
        sx={{ background: "transparent" }}
      >
        <Toolbar
          className={themeChange}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                  textAlign: "start",
                  padding: "10px",
                }}
              >
                <Link href="/">
                  <Button sx={{ color: "black" }} onClick={handleClose}>
                    Inicio
                  </Button>
                </Link>
                <Link href="/contacto">
                  <Button sx={{ color: "black" }} onClick={handleClose}>
                    Contacto
                  </Button>
                </Link>
              </Box>
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Box sx={{ display: "flex", gap: 4 }}>
              <Link className="custom-link" href="/">
                Inicio
              </Link>
              <Link className="custom-link" href="/contacto">
                Contacto
              </Link>
              <Link className="custom-link" href="/instalaciones">
                Instalaciones
              </Link>
            </Box>
          </Box>
          <Box>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, mt: 2 }}
            >
              <Image src={logo} alt="Ariel Mendez" width={100} priority />
            </Typography>
          </Box>

          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            <Socials />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
