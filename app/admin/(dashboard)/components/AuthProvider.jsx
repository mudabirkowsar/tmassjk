"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function AuthProvider({ children }) {
    const router = useRouter();
    const pathname = usePathname();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token");

        // 1. Define which paths are public (like the login page)
        const isLoginPage = pathname === "/admin/login";
        
        // 2. If no token and not on login page, redirect to login
        if (!token && !isLoginPage) {
            router.push("/admin/login");
        } 
        
        // 3. If token exists and user tries to go to login, send to admin dashboard
        else if (token && isLoginPage) {
            router.push("/admin");
        }

        setIsLoading(false);
    }, [pathname, router]);

    // Optional: Show nothing or a spinner while checking auth to prevent "flickering"
    if (isLoading && pathname !== "/admin/login") {
        return (
            <div className="h-screen w-full flex items-center justify-center bg-slate-50">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-slate-900"></div>
            </div>
        );
    }

    return <>{children}</>;
}