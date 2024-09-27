"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("")
    const router = useRouter();

    useEffect(() => {
        if (searchTerm.trim() === '') {
            router.push("/")
        }
        if (searchTerm.trim()) {
            const timeout = setTimeout(() => {
                if (searchTerm?.trim())
                    router.push(`/search/${searchTerm}`);
            }, 2000);
            return () => clearTimeout(timeout)
        }

    }, [searchTerm, router])

    return (
        <div className="w-full grid place-items-center">
            <input
                value={searchTerm}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                placeholder="search movies"
                className="w-full max-w-5xl py-2 pl-5 text-lg rounded-lg mt-5 bg-gray-700 dark:bg-gray-950"
                // Avoid passing any unnecessary props or attributes
            />
        </div>
    )
}
