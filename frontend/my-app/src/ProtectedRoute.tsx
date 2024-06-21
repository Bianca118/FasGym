import {useSelector} from "react-redux";
import {RootState} from "./store";
import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {AuthState} from "./auth/login/loginReducer";

export function getPath(path:string):string{
    return path;
}
export default function ProtectedRoute({children}:{children: React.JSX.Element}){
    const navigate = useNavigate();
    const user =useSelector((state:RootState)=> state.loginForm);
    const form: AuthState =useSelector((state: RootState) => {
        return state.login;
    });
    useEffect(() => {
        if(form.token === ''){
            navigate(getPath("/login"));
            window.location.reload();
        }
    }, [user,navigate]);
     if (!user){
         return null;
     }
     return children;
}