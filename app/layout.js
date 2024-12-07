import "./globals.css";



export const metadata = {
  title: "BitwizeCoder Blog",
  description: "Personal Blog of BitwizeCoder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}