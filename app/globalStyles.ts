import { Space_Grotesk } from "next/font/google";
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: [ '500', '700' ] });

export const TypoH1 = {
  fontFamily: spaceGrotesk,
  fontSize: '52px',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: '150%'
}

export const TypoH2 = {
  fontFamily: spaceGrotesk,
  fontSize: '44px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '150%'
}