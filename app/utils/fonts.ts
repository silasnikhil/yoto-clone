// app/fonts.ts
import { Signika } from "next/font/google";

const signika = Signika({
  subsets: ["latin"],
  display: "swap",
  variable: '--font-signika',
});

export const fonts = {
  signika,
};
