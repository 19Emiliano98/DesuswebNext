import { Space_Grotesk, Red_Hat_Display } from "next/font/google";
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: [ '500', '700' ] });
const redHatDisplay = Red_Hat_Display({ subsets: ["latin"], weight: [ '500', '700' ] });

export const TypoH1 = {
  fontFamily: spaceGrotesk,
  fontSize: { lg: '52px', md: '43px', xs: '27px' },
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: '150%'
}

export const TypoH2 = {
  fontFamily: spaceGrotesk,
  fontSize: {md: '40px', xs: '32px'},
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: '150%'
}

export const TypoH3 = {
  fontFamily: spaceGrotesk,
  fontSize: { md: '24px', xs: '17px' },
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '150%',
  color: '#191919'
}

export const TypoBody1 = {
  fontFamily: redHatDisplay,
  fontSize: { md: '22px', xs: '17px' },
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '170%'
}

export const TypoFormError= {
  fontFamily: spaceGrotesk,
  color: 'red',
  fontSize: { md: '10px', xs: '8px' },
  fontStyle: 'normal',
  fontWeight: 500
}