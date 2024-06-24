import { Header } from "@/components/Header";
import { Body } from "@/components/Body";
import{Body2} from "@/components/Body2"
import{Body3} from "@/components/Body3"
import { Body4 } from "@/components/Body4";

export default function Home() {
  return (
    <div className="h-screen w-full bg-neutral-700 ">
      <Header />
      <Body />
      <Body2 />
      <Body3 />
      <Body4 />
    </div>
  );
}
