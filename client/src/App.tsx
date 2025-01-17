import {Routes, Route} from 'react-router-dom'

import Landing from "./pages/LandingPage";
import Register from './pages/RegisterPage'
import Login from './pages/LoginPage'
import Home from './pages/HomePage'
import  TermsAndConditions from './pages/TermsPage'
import HistoryAndMactics from './pages/HistoryPage'

function App() {
    return (<>
        {/* <Landing /> */}
        {/* <Register /> */}
        {/* <Login /> */}
        {/* <Home /> */}
        <HistoryAndMactics />
        
        {/* <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Terms" element={<TermsAndConditions />} />
        </Routes> */}
    </>)
}

export default App
