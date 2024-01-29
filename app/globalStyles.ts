import { Space_Grotesk, Red_Hat_Display } from "next/font/google";
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: [ '500', '700' ] });
const redHatDisplay = Red_Hat_Display({ subsets: ["latin"], weight: [ '500', '700' ] });

export const TypoH1 = {
  fontFamily: spaceGrotesk,
  fontSize: { lg: '52px', md: '43px', xs: '30px' },
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: '150%'
}

export const TypoH2 = {
  fontFamily: spaceGrotesk,
  fontSize: {md: '44px', xs: '32px'},
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '150%'
}

export const TypoH3 = {
  fontFamily: spaceGrotesk,
  fontSize: { md: '21px', xs: '17px' },
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '150%',
  color: '#191919'
}

export const TypoBody1 = {
  fontFamily: redHatDisplay,
  fontSize: {md: '21px', xs: '17px'},
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '170%'
}