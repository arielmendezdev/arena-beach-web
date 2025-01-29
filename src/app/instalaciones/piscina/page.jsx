import piscina1 from '@/assets/images/piscina1.jpg'
import piscina2 from '@/assets/images/piscina2.jpg'
import piscina3 from '@/assets/images/piscina3.jpg'
import { Box, Card } from '@mui/material'
import Image from 'next/image'

export default function page() {

  const piscinas = [
    { name: 'piscina1', image: piscina1 },
    { name: 'piscina2', image: piscina2 },
    { name: 'piscina3', image: piscina3 },
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
        { piscinas.map((piscina, index) => 
          <Card key={index}>
            <Image src={piscina.image} alt={piscina.name} width={350}/>
          </Card>
        )}
      </Box>
    </div>
  );
}