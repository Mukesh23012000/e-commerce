import { useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";

export default function Layout({children}) {

  const theme  = useTheme();
  
  return (
    <div className={theme?.darkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"}>
      <div className="flex min-h-screen">
          {children}
      </div>
    </div>
  );
}