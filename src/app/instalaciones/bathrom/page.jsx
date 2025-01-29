import bathrom1 from '@/assets/images/bathrom.jpg'
import bathrom2 from '@/assets/images/bathrom2.jpg'
import bathrom4 from '@/assets/images/bathrom4.jpg'
import bathrom6 from '@/assets/images/bathrom6.jpg'
import bathrom8 from '@/assets/images/bathrom8.jpg'
import { Box, Card } from '@mui/material'
import Image from 'next/image'

export default function page() {

  const bathroms = [
    { name: "bathrom1", image: bathrom1 },
    { name: "bathrom2", image: bathrom2 },
    { name: "bathrom4", image: bathrom4 },
    { name: "bathrom6", image: bathrom6 },
    { name: "bathrom8", image: bathrom8 },
  ]

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          gap: 4,
          flexWrap: "wrap",
        }}
      >
        {bathroms.map((bathrom, index) => (
          <Card key={index}>
            <Image src={bathrom.image} alt={bathrom.name} width={350} />
          </Card>
        ))}
      </Box>
    </div>
  );
}