import {Route, Routes} from "react-router-dom";
import LoginScreen from "./screens/Login";
import ProtectedRoute from "./ProtectedRoute";
import Menu from "./screens/Menu";
import RegisterForm from "./screens/Register";
import UserDetail from "./screens/userDetail";
import Plan from "./screens/plan";
import Classes from "./screens/classes";
import ClassInfo from "./screens/classInfo";
import SettingsProfile from "./screens/settingsProfile";
import ModifyFormUser from "./screens/ModifyFormUser";

export default function RouterL() {

    return (

        <Routes>
            <Route path="/" element={<RegisterForm/>}/>
            <Route path="/login" element={<LoginScreen/>}/>

            <Route path="/Home" element={<ProtectedRoute>
                <Menu />
            </ProtectedRoute>}/>
            <Route path="/user" element={<ProtectedRoute>
                <UserDetail/>
            </ProtectedRoute>}/>
            <Route path="/plans" element={<ProtectedRoute>
                <Plan/>
            </ProtectedRoute>}/><Route path="/classes" element={<ProtectedRoute>
            <Classes/>
        </ProtectedRoute>}/>
            <Route path="/class-info" element={<ProtectedRoute>
                <ClassInfo/>
            </ProtectedRoute>}/>
            <Route path="/changeInfo" element={<ProtectedRoute>
                <SettingsProfile/>
            </ProtectedRoute>}/>
            <Route path="/modify" element={<ProtectedRoute>
                <ModifyFormUser/>
            </ProtectedRoute>}/>

        </Routes>

    );
};