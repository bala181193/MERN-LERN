import React from "react";

const Footer = () => {
    return (
        <>
            <footer className="fixed inset-x-0 bottom-0 flex flex-col items-center bg-neutral-900 text-center text-white">
                <div className="w-fill p-4 text-center" style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
                    @2024 jvlcode
                </div>
            </footer>
        </>
    )
}

export default Footer