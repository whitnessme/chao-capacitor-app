import { useState } from "react";
import ThemeForm from "./ThemeForm";

export default function Footer() {
    const [showThemeForm, setShowThemeForm] = useState(false);

    return (
        <footer>
            {showThemeForm && (
                <ThemeForm />
            )}
            <button onClick={() => setShowThemeForm(!showThemeForm)} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                {showThemeForm ? "Done" : "Change Theme"}
            </button>
        </footer>
    )
}