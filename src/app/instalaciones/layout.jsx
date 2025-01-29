import NavInstalaciones from "@/components/NavInstalaciones";
import { Box } from "@mui/material";

export default function RootLayout({children}) {
  return (
    <main sx={{ mx: 10 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          flexDirection: "column",
          textAlign: "center",
          width: "100%",
        }}
      >
        <NavInstalaciones
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            flexDirection: "column",
            textAlign: "center",
            width: "100%",
          }}
        />
        <Box sx={{ mt: 5 }}>{children}</Box>
      </Box>
    </main>
  );
}
