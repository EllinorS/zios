import { useEffect, useState } from "react";

  const Dark = () =>  {
 
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

 
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

 
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="navbar">

      <button className="theme-btn" onClick={toggleTheme}>
     
        {theme === "dark" ? "🌞" : "🌚"}
      </button>
    </nav>
  );
}

export default  Dark