import Link from "next/link";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 flex flex-col">
        <div className="bg-black h-full flex flex-row justify-center items-center">
          <div className="header text-zinc-200 font-sans px-auto mx-12">
            <div className="text-7xl font-semibold">Hello.</div>
            <div className="flex flex-row pl-1">
              <div class="line"></div>
              <div className="pl-4">
                <div className="text-md font-medium opacity-70">Jo Jo</div>
                <div className="text-xs font-light opacity-60">
                  Personal website
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <figure>
              <img src="/imgs/icon.png" alt="resource.Name" />
            </figure>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
