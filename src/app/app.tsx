"use client";

import dynamic from "next/dynamic";

const PrivyV2FramesDemo = dynamic(
  () => import("~/components/PrivyV2FramesDemo"),
  {
    ssr: false,
  },
);

export default function App() {
  return <PrivyV2FramesDemo />;
}
