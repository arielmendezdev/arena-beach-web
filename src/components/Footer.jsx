import '@/assets/css/Footer.css';
import { Box } from '@mui/material';
import Socials from './Socials';

export default function Footer() {
  return (
    <footer>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <p>All Rights Reserved.</p>
          <p>2024 © By Ariel Mendez</p>
        </Box>
        <Box
          sx={{ display: { xs: "flex", sm: "none" }, justifyContent: "end" }}
        >
          <Socials />
        </Box>
    </footer>
  );
}