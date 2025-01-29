import bar1 from "@/assets/images/bar2.jpg";
import bar2 from "@/assets/images/bar3.jpg";
import bar3 from "@/assets/images/bar4.jpg";
import bar4 from "@/assets/images/bar5.jpeg";
import { Box, Card } from "@mui/material";
import Image from "next/image";

export default function page() {
  const bars = [
    { name: "bar1", image: bar1 },
    { name: "bar2", image: bar2 },
    { name: "bar3", image: bar3 },
    { name: "bar4", image: bar4 },
  ];

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
        {bars.map((bar, index) => (
          <Card key={index}>
            <Image src={bar.image} alt={bar.name} width={350} sx={{}} />
          </Card>
        ))}
      </Box>
    </div>
  );
}
