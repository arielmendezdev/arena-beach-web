"use client";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box } from "@mui/material";

export default function NavInstalaciones() {
  const pathname = usePathname();
  const basePath = "/instalaciones";

  const links = [
    { label: "Bar", path: `${basePath}/bar` },
    { label: "Piscina", path: `${basePath}/piscina` },
    { label: "Carpas", path: `${basePath}/carpas` },
    { label: "Sombrillas", path: `${basePath}/sombrillas` },
    { label: "Baños", path: `${basePath}/bathrom` },
  ];

  return (
    <>
      <Breadcrumbs
        separator="|"
        sx={{
          fontSize: "16px",
          color: "#aaa",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {links.map((link) => (
          <Link key={link.path} href={link.path}>
            <Box
              sx={{
                color: pathname === link.path ? "#d32f2f" : "#007bff",
                textDecoration: pathname === link.path ? "underline" : "none",
                // fontWeight: pathname === link.path ? "bold" : "normal",
                transition: "color 0.1s ease",
                "&:hover": { color: "#007ba1" },
              }}
            >
              {link.label}
            </Box>
          </Link>
        ))}
      </Breadcrumbs>
    </>
  );
}
