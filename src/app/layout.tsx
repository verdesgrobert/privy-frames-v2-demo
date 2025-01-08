import "~/app/globals.css";
import { Providers } from "~/app/providers";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const appUrl = "https://streamm.appboxstudios.com/"
  const frame = {
    version: "next",
    imageUrl: `${appUrl}/opengraph-image.png`,
    button: {
      title: "Open Frame",
      action: {
        type: "launch_frame",
        name: "My Frame",
        url: `${appUrl}/`,
        splashImageUrl: "https://streamm.tv/framesplash.png",
        splashBackgroundColor: "#FFFFFF",
      },
    },
  };
  return (
    <html lang="en">
      <head>
        <meta property="fc:frame" content={JSON.stringify(frame).replace(/' /g, '&#39;')} />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
