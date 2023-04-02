import NavBar from "@/components/commons/layout/navbar";
import "./globals.css";
import ClientOnly from "@/components/commons/ClientOnly";
import { Nunito } from "next/font/google";
import RegisterModal from "@/components/commons/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "@/components/commons/modals/LoginModal";
import getCurrentUser from "@/components/actions/getCurrentUser";

export const metadata = {
  title: "AirBnb-yt",
  description: "copy to airbnb",
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <NavBar currentUser={currentUser} />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
