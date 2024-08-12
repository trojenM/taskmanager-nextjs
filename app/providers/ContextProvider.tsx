"use client";
import React, { useEffect } from 'react'
import { GlobalProvider } from '../context/GlobalProvider'
import { Toaster } from 'react-hot-toast'

interface Props {
    children: React.ReactNode;
}

function ContextProvider({ children }: Props) {
    const [isReady, setIsReady] = React.useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsReady(true);
        }, 200);
    }, [])

    if (!isReady) return (
        <div className="size-full flex items-center justify-center">
            <span className="loader"></span>
        </div>
    );

    return (
        <GlobalProvider>
            <Toaster />
            {children}
        </GlobalProvider>
    )
}

export default ContextProvider