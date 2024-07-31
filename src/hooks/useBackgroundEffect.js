import { useEffect } from "react";

const useBackgroundEffect = (pathname) => {
    useEffect(() => {
        const applyBackground = () => {
            if (pathname.startsWith('/login') || pathname.startsWith('/register')) {
                document.body.style.background = '#FFF'
            }
            else if (
                pathname.startsWith('/jobs') ||
                pathname.startsWith('/search') ||
                pathname.startsWith('/dashboard') ||
                pathname.startsWith('/mycv')) {
                document.body.style.background = '#F5F5F8'
            }
            else {
                document.body.style.background = '#083CAE'
            }
        }

        applyBackground();

        return () => {
            document.body.style.background = ''
        }
    }, [pathname])
}

export default useBackgroundEffect