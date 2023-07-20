import { Route, Routes } from "react-router-dom"
import { Welcomeone } from "../Pages/Welcome"
import { Welcometwo } from "../Pages/Welcometwo"
import { Home } from "../Pages/Home"
import { Register } from "../Pages/Register"
import { PrivateRoute } from "./PrivateRoute"
import { Ludo } from "../Pages/Ludo"


function Allroute(){
    return <div>
        <Routes>
            <Route path="/" element={<Welcomeone/>}/>
            <Route path="/welcome" element={<Welcometwo/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/home" element={<PrivateRoute><Home/></PrivateRoute>}/>
            <Route path="/ludo" element={<PrivateRoute><Ludo/></PrivateRoute>}/>
        </Routes>

    </div>
}
export default Allroute