import {Routes, Route} from 'react-router-dom'

import Landing from "./pages/LandingPage";
import Register from './pages/RegisterPage'

function App() {
    return (<>
        {/* <Landing /> */}
        <Register />
        
        {/* <Routes>
            <Route path="/" element={<Landing />} />
        </Routes> */}
    </>)
}

export default App
