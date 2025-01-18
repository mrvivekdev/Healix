import {Routes, Route} from 'react-router-dom'
import Cookie from 'js-cookie'
import { useContext } from 'react';

import { AppContext } from './utils/GenrealContext';
import Landing from "./pages/LandingPage";
import Register from './pages/RegisterPage'
import Login from './pages/LoginPage'
import Home from './pages/HomePage'
import TermsAndConditions from './pages/TermsPage'
import History from './pages/HistoryPage'
import Matrics from './pages/MatricsPage'
import NormalIssue from './pages/NormalIssueForm'

function App() {
    const {setCookie} = useContext<any>(AppContext);

    const GetCookie = Cookie.get("uid");
    if(GetCookie){
        setCookie(GetCookie);
    } 

    return (<>
        {/* <Landing /> */}
        {/* <Register /> */}
        {/* <Login /> */}
        {/* <Home /> */}
        {/* <History /> */}
        {/* <Matrics /> */}
        <NormalIssue />
        
        {/* <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Terms" element={<TermsAndConditions />} />
            <Route path="/History" element={<History />} />
            <Route path="/Matrics" element={<Matrics />} />
        </Routes> */}
    </>)
}

export default App
