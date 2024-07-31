import { useLocation } from 'react-router-dom';

const useMultipleLocationStartsWith = (paths) => {
    const location = useLocation();
    return paths.some(path => location.pathname.startsWith(path));
};

export default useMultipleLocationStartsWith;
