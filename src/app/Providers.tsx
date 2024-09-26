// app/providers.tsx
"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect, useState } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Prevents mismatches during SSR by not rendering until the client has mounted
    return <>{children}</>;
  }

  return (
    <NextThemesProvider attribute="class" defaultTheme="dark">
      <div className='text-white dark:text-gray-200 dark:bg-gray-700 min-h-screen select-none transition-colors duration-300'>
        {children}
      </div>
    </NextThemesProvider>
  );
}
