"use client"
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { LuSunMoon } from "react-icons/lu";
import { IoSunny } from "react-icons/io5";

export default function DarkModeSwitch() {
    const { theme, setTheme, systemTheme } = useTheme();
    const [isLoaded, setIsLoaded] = useState(false);

    // decide which theme is active
    const currentTheme = theme === "system" ? systemTheme : theme;

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div>
            {isLoaded && (
                currentTheme === "dark" ? (
                    <IoSunny
                        className="text-xl cursor-pointer hover:text-amber-500"
                        onClick={() => setTheme("light")}
                    />
                ) : (
                    <LuSunMoon
                        className="text-xl cursor-pointer hover:text-amber-500"
                        onClick={() => setTheme("dark")}
                    />
                )
            )}
        </div>
    );
}
