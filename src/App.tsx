import {useRoutes} from "react-router-dom";
import router from "src/router";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

import {CssBaseline} from "@mui/material";
import ThemeProvider from "./theme/ThemeProvider";
import {useNavigate} from "react-router";
import {useEffect} from "react";



function App() {
  const navigate = useNavigate();
  const content = useRoutes(router);

  useEffect(() => {
    if (new Date().getTime() - +localStorage.getItem('accessTokenTime') > 1000 * 60 * 60 * 10) {
      localStorage.setItem("accessToken", '');
      localStorage.setItem('accessTokenTime', '')
    }

    if (!localStorage.getItem('accessToken')) navigate('/login')
  }, []);

  return (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CssBaseline/>
        {content}
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
