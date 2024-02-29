/* import { Space_Grotesk, Red_Hat_Display } from "next/font/google";
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: [ '500', '700' ] });
const redHatDisplay = Red_Hat_Display({ subsets: ["latin"], weight: [ '500', '700' ] }); */
import { fontSpaceGrotesk, fontInter, fontUnicaOne, fontRedHatDisplay } from "./ui/fonts"

export const TypoH1 = {
  fontFamily: fontSpaceGrotesk,
  fontSize: { lg: '52px', md: '38px', xs: '24px' },
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: '150%'
}

export const TypoH2 = {
  fontFamily: fontSpaceGrotesk,
  fontSize: {md: '40px', xs: '32px'},
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: '150%'
}

export const TypoH3 = {
  fontFamily: fontSpaceGrotesk,
  fontSize: { md: '24px', xs: '17px' },
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '150%',
  color: '#191919'
}

export const TypoH4 = {
  fontFamily: fontRedHatDisplay,
  fontSize: { md: '24px', xs: '17px' },
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '150%',
  color: '#191919'
}

export const TypoBody1 = {
  fontFamily: fontRedHatDisplay,
  fontSize: { md: '22px', xs: '17px' },
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '170%'
}

export const TypoBody2 = {
  fontFamily: fontInter,
  fontSize: { md: '20px', xs: '17px' },
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '170%'
}

export const TypoFormError= {
  fontFamily: fontSpaceGrotesk,
  color: 'red',
  fontSize: { md: '10px', xs: '8px' },
  fontStyle: 'normal',
  fontWeight: 500
}