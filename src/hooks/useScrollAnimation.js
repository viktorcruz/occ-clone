import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const useScrollAnimation = () => {
    const controls = useAnimation()

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                controls.start({ opacity: 0, y: -100 });
            } else {
                controls.start({ opacity: 1, y: 0 });
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [controls])

    return controls
}

export default useScrollAnimation