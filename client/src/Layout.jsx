// this page is created for fixed Layout, so that in each page we dont need to add header and footer again and again 

import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
    return (
        <div>
            <Header />
            {/* Outlet component is used to render nested routes */}
            <Outlet />
        </div>
    );
}