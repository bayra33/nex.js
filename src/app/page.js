import { Header } from "@/components/Header";
import { Body } from "@/components/Body";
import{Body2} from "@/components/Body2"
import{Body3} from "@/components/Body3"
import { Body4 } from "@/components/Body4";
import {Body5} from "@/components/Body5"
import { Body6 } from "@/components/Body6";

export default function Home() {
  return (
    <div className="h-screen w-full bg-white ">
      <Header />
      <Body />
      <Body2 />
      <Body3 />
      <Body4 />
      <Body5 />
      <Body6 />
    </div>
  );
}
