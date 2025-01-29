'use client'

import { useContext } from "react";
import { contextGeneral } from "@/app/layout";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { Box, IconButton } from "@mui/material";
import Link from "next/link";

export default function Socials() {
  const { themeChange, toggleTheme } = useContext(contextGeneral);
  return (
    <div>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Link href="https://github.com/arielmendezdev">
          <IconButton>
            <GitHubIcon className="custom-link" />
          </IconButton>
        </Link>
        <Link href="https://www.linkedin.com/in/arimendez/">
          <IconButton>
            <LinkedInIcon className="custom-link" />
          </IconButton>
        </Link>
      </Box>
    </div>
  );
}
