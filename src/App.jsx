import { ThemeProvider } from "./context/Theme";
import Cards from "./components/Cards";
import ThemeBtn from "./components/ThemeBtn";

import { useEffect, useState } from 'react'
import "./App.css";

const [themeMode, setThemeMode] = useState("light");

function App() {

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  // actual change in theme

  useEffect(
    () => {
      document.querySelector("html").classList.remove("light", "dark");
      document.querySelector("html").classList.add(themeMode);
    },
    [themeMode]
  );

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* theme button */}
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/*  cards*/}
            <Cards />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
