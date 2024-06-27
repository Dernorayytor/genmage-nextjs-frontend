import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
    } from "react-router-dom"

import Login from '../notuse/log-in'
import SignUp from '../notuse/sign-up'
    const elements = createRoutesFromElements(
        <>
        <Route path="/" element={<Home />} />,
        <Route path="/Login" element={<Login />} />,
        <Route path="/SignUp" element={<SignUp />} />
        </>
    )
    const Route = createBrowserRouter(elements)
    export default Route