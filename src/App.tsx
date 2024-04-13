import { FAQList } from "./components";

function App() {
  return (
    <main className="grid grid-rows-3 bg-light w-full min-h-screen">
      <section className="md:bg-[url('/assets/images/background-pattern-desktop.svg')] row-span-1 bg-[url('/assets/images/background-pattern-mobile.svg')] bg-cover w-full"></section>
      <section className="row-span-2">
        <div className="relative z-20 bg-white shadow-md mx-auto -mt-[6rem] mb-10 px-6 py-6 rounded-lg w-[90%] max-w-[720px]">
          <div className="flex items-center gap-6 mb-6 py-2 text-primary">
            <img src="/assets/images/icon-star.svg" alt="a star" />
            <h1 className="font-bold text-6xl">FAQs</h1>
          </div>
          <FAQList />
        </div>
      </section>
    </main>
  );
}

export default App;
