import "./App.css";
import Toggle_dark_mode from "./components/Toggle_dark_mode";
import Card_all from "./components/Card_all";
import Card_simple from "./components/Card_simple";
import data from "./data/data";
import { useEffect, useState } from "react";
function App() {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    setArr(data);
  }, []);

  console.log(data);

  return (
    <main className="p-8 min-h-screen bg-fm-White  transition-colors transition-discrete ease-in-out duration-500 dark:bg-custom-fm-dark-mode ">
     <div className="w-full lg:max-w-[1300px] m-auto flex flex-col md:flex-row lg:flex-row items-center justify-between">
       <div className="pb-8 w-full border-b-1 border-b-neutral-600 md:border-none lg:border-none md:pb-0">
        <p className="text-fm-Dark-Desaturated-Blue font-bold text-4xl dark:text-fm-White lg:text-6xl">
          Social Media Dashboard
        </p>
        <p className="text-fm-Dark-Grayish-Blue font-bold lg:text-3xl lg:mt-3">
          Total Followers:23,004
        </p>
      </div>
      <div className="flex justify-between self-start gap-3 items-center pt-8 md:pt-0 lg:pt-0 lg:gap-3">
        <p className="text-fm-Dark-Grayish-Blue font-bold md:w-[80px] dark:text-white">Dark Mode</p>
        <Toggle_dark_mode></Toggle_dark_mode>
      </div>
     </div>
      <section className="py-12 grid grid-cols-1 m-auto gap-8.5 md:grid-cols-2 lg:grid-cols-4 lg:max-w-[1300px]">
        {arr.map((datos) => {
          return <Card_all datos={datos}></Card_all>;
        })}
      </section>
      <p className="text-4xl font-bold text-fm-Dark-Grayish-Blue lg:text-6xl lg:max-w-[1300px] m-auto dark:text-white">
        Overview-Today
      </p>
      <section className="py-12 grid grid-cols-1 gap-8.5  md:grid-cols-2 lg:grid-cols-4 lg:max-w-[1300px] m-auto">
             {arr.map((datos) => {
          return <Card_simple datos={datos}></Card_simple>;
        })}
      </section>
    </main>
  );
}

export default App;
