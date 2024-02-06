import { Box, Typography } from "@mui/material";
import Formulary from "./Formulary";
import { TypoH2 } from "../../globalStyles";

export default function ContactSection () {
  return (
		<Box id="contacto">
			<Box
				sx={{
					background: "#fbc837",
					boxShadow: "0 0 20 0 #23232333, 0 8px 20px 0 #23232333",
					pb: 10
				}}
			>
				<Box
					sx={{
						textAlign: "center",
						padding: "1.5rem 0",
					}}
				>
					<Typography
						component="h2"
						sx={{
							fontFamily: TypoH2.fontFamily,
							fontSize: TypoH2.fontSize,
							fontStyle: TypoH2.fontStyle,
							fontWeight: TypoH2.fontWeight,
							lineHeight: TypoH2.lineHeight
						}}
					>
						Contáctanos:
					</Typography>
				</Box>
					<Formulary />
			</Box>
		</Box>
	);
}