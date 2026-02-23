import Heropage from "@/components/layout/heropage";
import Navbar from "@/components/layout/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="pt-36">
        <Heropage />
      </div>
    </div>
  );
}
