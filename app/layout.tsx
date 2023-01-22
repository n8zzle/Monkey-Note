import "../styles/globals.css";
import Menu from "./Menu.tsx";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="h-screen w-screen flex flex-row">
        <Menu />
        {children}
      </body>
    </html>
  );
}
