"use client";

import { AudioControl } from "@/components/audioControl";
import { Content } from "@/components/content/content";
import Menu from "@/components/menu/menu";
import { Key, useState } from "react";

export default function Home() {
  const [activeContent, setActiveContent] = useState<Key | null>("");
  const [showContent, setShowContent] = useState(false);

  const onMenuClick = (content: Key | null) => {
    if (content === activeContent) {
      setShowContent(!showContent);
      return;
    }
    setActiveContent(content);
    setShowContent(true);
  };

  return (
    <div id="home-container">
      <Menu onMenuClick={onMenuClick} />
      <Content activeContent={activeContent} showContent={showContent} />
      <AudioControl />
    </div>
  );
}
