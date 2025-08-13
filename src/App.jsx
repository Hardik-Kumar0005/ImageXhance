import Home from "./components/Home";
import { useState } from "react";

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div
            style={{
                
                backgroundImage: `url(/${darkMode ? "darkbg.jpg" : "lightbg.jpg"})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                className: "transition-image_url"
            }}
            className={
                `flex flex-col items-center justify-center min-h-screen py-8 px-4 transition-colors duration-300 ` +
                (darkMode ? "bg-gray-900 text-gray-900" : "bg-gray-100 text-gray-900"
                )
            }
        >
            <div
                className="fixed top-4 right-4 flex justify-end mb-4 z-50"
            >
                <button
                    className={
                        `rounded-full px-4 py-2 font-semibold shadow-lg transition-colors duration-300 ` +
                        (darkMode ? "bg-gray-700 text-yellow-300 hover:bg-gray-600" : "bg-white text-blue-600 hover:bg-blue-100 border border-blue-300")
                    }
                    onClick={() => setDarkMode(!darkMode)}
                    aria-label="Toggle dark mode"
                >
                    {darkMode ? "🌙 Dark" : "☀️ Light"}
                </button>
            </div>
            <div className="text-center mb-8">
                <h1 className={
                    `text-5xl font-bold mb-2 ` +
                    (darkMode ? "text-yellow-300" : "text-gray-800")
                }>
                    AI Image Enhancer
                </h1>
                <p className={
                    `text-lg ` +
                    (darkMode ? "text-gray-300" : "text-gray-500")
                }>
                    Upload your Image and let AI enhance it in seconds!
                </p>
            </div>

            <Home darkMode={darkMode} />
        </div>
    );
};

export default App;
