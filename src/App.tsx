import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  return (
    <>
      <main className="min-h-screen bg-black text-white">
        <div className="container mx-auto p-10">
          <div className="flex items-center justify-center">
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1 className="text-center text-3xl font-bold underline">
            Vite + React
          </h1>
        </div>
      </main>
    </>
  );
}

export default App;
