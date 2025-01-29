import '@/assets/css/Footer.css';
import { Box } from '@mui/material';
import Socials from './Socials';

export default function Footer() {
  return (
    <footer sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignContent: 'center' }}>
        <p>All Rights Reserved.</p>
        <p>2024 © By Ariel Mendez</p>
      </Box>

      <Box sx={{ display: { xs: "flex", sm: "none" } }}>
        <Socials />
      </Box>
    </footer>
  );
}