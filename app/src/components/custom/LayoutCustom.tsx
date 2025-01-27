import Header from "../layout/Header";


const LayoutCustom = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen w-full">
            <Header />
            {children}
        </div>
    )
}

export default LayoutCustom;