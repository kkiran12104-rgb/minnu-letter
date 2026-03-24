"use client";

import IntroScreen from "../../IntroScreen";
import MessageScreen from "../../MessageScreen";
import StarScreen from "../../StarScreen";
import OutroScreen from "../../OutroScreen";

export default function Home() {
  return (
    <>
      <IntroScreen />
      <MessageScreen />
      <StarScreen />
      <OutroScreen />
    </>
  );
}
