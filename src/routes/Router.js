import { lazy } from "react";
import { Navigate, Route } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
// const Alerts = lazy(() => import("../views/ui/Alerts"));
const Alerts = lazy(()=>import("../views/ui/Alerts"));
const Badges = lazy(() => import("../views/ui/Badges"));
const Buttons = lazy(() => import("../views/ui/Buttons"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));
const Form2 = lazy(()=>import("../views/ui/form2"))
const Form = lazy(()=>import("../views/ui/Forms"))
const Form3 = lazy(()=>import("../views/ui/form3"))
const Signin2 = lazy(()=>import("../views/ui/SIgnIn"))
const View = lazy(()=>import("../views/ui/View"))
const Edit = lazy(()=>import("../views/ui/Edit"))
const CaReview = lazy(()=>import("../views/ui/CAReview"))
const CAFinalReview = lazy(()=>import("../views/ui/CAFinalReviewTable"))
const TraineeSignup = lazy(()=>import("../views/ui/traineesignup"))
const PrintView = lazy(()=>import("../views/ui/print"))
const TraineeSignin = lazy(()=>import("../views/ui/traineesignin"))
const Logout = lazy(()=>import("../views/ui/masterlogout"))

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/starter" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      {path:"/alert",exact:true, element:<Alerts />},
      {path:"/view/:Rowid",exact:true, element:<View />},
      {path:"/edit/:Rowid",exact:true, element:<Edit />},
      { path: "/about", exact: true, element: <About /> },
      { path: "/badges", exact: true, element: <Badges /> },
      { path: "/buttons", exact: true, element: <Buttons /> },
      { path: "/cards", exact: true, element: <Cards /> },
      { path: "/grid", exact: true, element: <Grid /> },
      { path: "/table", exact: true, element: <Tables /> },
      { path: "/forms", exact: true, element: <Forms /> },
      {path:"/forms2",exact:true,element:<Form2 />},
      {path:"/forms3",exact:true,element:<Form3 />},
      { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
      { path: "/careview", exact: true, element: <CaReview /> },
      { path: "/logout", exact: true, element: <Logout /> },
      { path: "/print/:Rowid", exact: true, element: <PrintView /> },
      { path: "/traineesignup", exact: true, element: <TraineeSignup /> },
      { path: "/traineesignin", exact: true, element: <TraineeSignup /> },
      { path: "/cafinalreview/:Rowid", exact: true, element: <CAFinalReview /> }
    ],
  },
];

export default ThemeRoutes;
