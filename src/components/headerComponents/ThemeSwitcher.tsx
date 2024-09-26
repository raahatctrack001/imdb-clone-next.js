// app/components/ThemeSwitcher.tsx
"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null
  console.log(theme)
  return (
    <div>
      {/* The current theme is: {theme} */}
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="mr-2 text-3xl flex items-center">
        {theme === 'light' ? <FaSun/> : <FaMoon />}
      </button>
    </div>
  )
};