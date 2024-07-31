import { useState } from 'react';

const useHeaderSearch = () => {
    const [salary, setSalary] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');
    const [remote, setRemote] = useState('');
    const [education, setEducation] = useState('');
    const [contracting, setContracting] = useState('');

    const handleChangeSalary = (event) => {
        setSalary(event.target.value);
    };

    const handleChangeDate = (event) => {
        setDate(event.target.value);
    };

    const handleChangeCategory = (event) => {
        setCategory(event.target.value);
    };

    const handleChangeRemote = (event) => {
        setRemote(event.target.value);
    };

    const handleChangeEducation = (event) => {
        setEducation(event.target.value);
    };

    const handleChangeContracting = (event) => {
        setContracting(event.target.value);
    };

    return {
        salary,
        handleChangeSalary,
        date,
        handleChangeDate,
        category,
        handleChangeCategory,
        remote,
        handleChangeRemote,
        education,
        handleChangeEducation,
        contracting,
        handleChangeContracting,
    };
};

export default useHeaderSearch;
