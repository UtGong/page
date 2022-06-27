import Footer from "../components/Footer";

export default function resume() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 flex flex-col">
        <div className="bg-black h-full flex flex-row justify-center items-center">
          <div className="header text-zinc-200 font-sans px-auto mx-12">
            <div className="text-7xl font-semibold">Projects</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
