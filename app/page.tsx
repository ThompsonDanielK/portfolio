import { AudioControl } from "@/components/audioControl";
import Menu from "../components/menu/menu";

export default function Home() {
  return (
    <div id="home-container">
      <Menu />
      <AudioControl />
    </div>
  );
}
