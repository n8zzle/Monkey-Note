import "../styles/globals.css";
import MyMenu from "./MyMenu.tsx";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body
        className="h-screen w-screen flex flex-col md:flex-row
      "
      >
        <MyMenu />
        {children}
      </body>
    </html>
  );
}
