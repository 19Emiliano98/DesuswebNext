import { Box, Card, Typography } from "@mui/material";
import { TypoH2 } from "../../globalStyles";

export default function SkillsCards() {
  return(
    <Box>
      <Typography 
        sx={{ 
          fontFamily: TypoH2.fontFamily,
          fontSize: TypoH2.fontSize,
          fontStyle: TypoH2.fontStyle,
          fontWeight: TypoH2.fontWeight,
          lineHeight: TypoH2.lineHeight
        }}
        variant="h2"
      >
        Trabajamos con:
      </Typography>

      <Card>
        
      </Card>
    </Box>
  )
}