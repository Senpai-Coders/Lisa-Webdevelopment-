import React, { lazy } from "react";

// Landing page 
const Contact = lazy(() => import("../components/landing-page/Contact/Contact"));
const About = lazy(()=> import("../components/landing-page/About/About"));
const Home = lazy(()=> import("../components/landing-page/Home/Home"));
const Service = lazy(()=> import("../components/landing-page/Service/Service") );

// Portfolio Page 


const ROUTERS = [
    {
        path: "/About",
        component: About,
    },
    {
        path: "/Contact",
        component:Contact,
    },
    {
        path: "/Home",
        component: Home 
    },
    {
        path:"/Service",
        component:Service
    }
]

export default  {
    ROUTERS:ROUTERS
}