import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import useBackgroundEffect from "./hooks/useBackgroundEffect";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import SearchPage from "./pages/SearchPage";
import DashboardPage from "./pages/DashboardPage";
import JobsPage from "./pages/JobsPage";
import PrivateRoute from "./components/common/PrivateRoute";
import MyCvPage from "./pages/MyCvPage";

const AppConntent = () => {
    const location = useLocation()
    useBackgroundEffect(location.pathname);
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route element={<PrivateRoute />}>
                <Route path="/search" element={<SearchPage />} />
                <Route path="/jobs/:id" element={<JobsPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/mycv" element={<MyCvPage />} />
                <Route path="/settings" element={<SearchPage />} />
            </Route>
        </Routes>
    )
}

export default AppConntent