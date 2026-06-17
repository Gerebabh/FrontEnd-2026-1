import { useAuthContext } from "../src/hooks/useAuthContext";
import { Navigate, Outlet } from "react-router";

function Privado() {
    const { logado } = useAuthContext();

    console.log("LOGADO:", logado);

    return <> 
        {logado ?
            <Outlet/>
            : <Navigate to="/login" />
        }
    </>;
}

export default Privado