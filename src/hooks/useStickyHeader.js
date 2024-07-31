import { useEffect } from "react";

const useStickyHeader = (headerId) => {
    useEffect(() => {
        const headerSearch = document.getElementById(headerId);
        const sticky = headerSearch.offsetTop;

        const handleStickyScroll = () => {
            if (window.pageYOffset >= sticky) {
                headerSearch.classList.add("sticky")
            } else {
                headerSearch.classList.remove("sticky")
            }
        }

        window.addEventListener('scroll', handleStickyScroll)
        return () => {
            window.removeEventListener('scroll', handleStickyScroll)
        }
    }, [headerId])

}

export default useStickyHeader