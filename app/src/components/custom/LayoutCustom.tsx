"use client"

import Header from "../layout/Header";
import NavBar from "../layout/NavBar";

const LayoutCustom = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen w-full">
            <Header />
            {children}
            <NavBar />
        </div>
    )
}

export default LayoutCustom;