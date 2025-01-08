import { Metadata } from "next";
import App from "./app";

const appUrl = process.env.NEXT_PUBLIC_URL;

const frame = {
  version: "next",
  imageUrl: `${appUrl}/opengraph-image.png`,
  button: {
    title: "Test Cast with an embedded wallet!",
    action: {
      type: "launch_frame",
      name: "Privy Frames v2 Demo",
      url: appUrl,
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#f7f7f7",
    },
  },
};

export const revalidate = 10;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Privy Frames v2 Demo",
    openGraph: {
      title: "Privy Frames v2 Demo",
      description: "A Privy Frames v2 demo app.",
    },
    other: {
      "fc:frame": JSON.stringify(frame),
    },
  };
}

export default function Home() {
  return <App />;
}
