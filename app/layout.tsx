import type { Metadata } from "next";
import { Providers } from "./providers";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/assets/MaximaLogo.png",
  },
  description: "-",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <link rel="icon" href="/assets/MaximaLogo.png" />
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
