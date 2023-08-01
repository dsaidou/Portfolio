import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { ColorModeContext, useMode } from "./theme/ThemeProvider";
import NavBar from "./components/NavBar";
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Project from "./pages/Project";
import About from "./pages/About";


export default function App() {
  const [theme, colorMode] = useMode();
  const router = createBrowserRouter(
    createRoutesFromElements(
     <Route element={<Root/>}>
      <Route  path='/Portfolio/' element={<Homepage/>}/>
      <Route  path='/Project' element={<Project/>}/>
      <Route  path='/About' element={<About/>}/>
     </Route>
    ))

  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <div className="app">
        <RouterProvider router={router}/>
        </div>
      </CssBaseline>
    </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

const Root = ()=>{
  return(
     <>
     <NavBar/>
    <Outlet/>
    </>
  )
}
