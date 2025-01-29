import sombrilla1 from '@/assets/images/sombrilla1.jpg'
import sombrilla2 from '@/assets/images/sombrilla2.jpg'
import sombrilla3 from '@/assets/images/sombrilla3.jpg'
import { Box, Card } from '@mui/material'
import Image from 'next/image'

export default function page() {

  const sombrillas = [
    { name: 'sombrilla1', image: sombrilla1 },
    { name: 'sombrilla2', image: sombrilla2 },
    { name: 'sombrilla3', image: sombrilla3 },
  ]

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          gap: 4,
        }}
      >
        { sombrillas.map((sombrilla, index) => 
          <Card key={index}>
            <Image src={sombrilla.image} alt={sombrilla.name} width={350}/>
          </Card>
        )}
      </Box>
    </div>
  );
}