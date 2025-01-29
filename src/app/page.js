import wallpaper from '@/assets/images/playa1.png'
import Image from "next/image";
import { Box } from '@mui/material';

export default function Home() {
  return (
    <>
      <Box>
        <Image src={wallpaper} alt="Imagen del balneario"/>
      </Box>
    </>
  );
}
