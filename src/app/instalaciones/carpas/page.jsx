import carpa1 from "@/assets/images/carpa1.jpg"
import carpa2 from "@/assets/images/carpa2.jpg"
import carpa3 from "@/assets/images/carpa3.jpg"
import { Box, Card } from "@mui/material"
import Image from "next/image"

export default function page() {

  const carpas = [
    { name: "carpa1", image: carpa1 },
    { name: "carpa2", image: carpa2 },
    { name: "carpa3", image: carpa3 },
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
        {carpas.map((carpa, index) => (
          <Card key={index}>
            <Image src={carpa.image} alt={carpa.name} width={350} />
          </Card>
        ))}
      </Box>
    </div>
  );
}