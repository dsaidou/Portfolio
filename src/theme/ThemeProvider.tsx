import { PaletteMode } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { createContext, useMemo, useState } from "react"



export const themeSettings = (mode:PaletteMode)=>({

  palette : {
    mode, 
  ...(mode === 'dark' ? {
    // palette pour le light mode

        primary:{
          main: '#A473E2',
        },
        secondary:{
          main: 'rgba(164, 115, 226, 1)',
          hover: 'rgba(164, 115, 226, 0.5)',
          default: 'rgba(164, 115, 226, 0.9)'
          
        },
        background:{
          default: '#F4F4F4',
          main: 'rgba(164, 115, 226, 0.2)',

        },
        text:{
          primary: '#161616',
        },
        
       
        

    }
    :{
      // palette pour le dark mode

      primary:{
        main: '#835DB4',
      },
      secondary:{
        main: 'rgba(131, 93, 180, 1)',
        hover: 'rgba(131, 93, 180, 0.5)',
        default: 'rgba(131, 93, 180, 0.9)'
      },
      background:{
        default: '#161616',
        main: 'rgba(131, 93, 180, 0.2)',
      },
      text:{
        primary: '#F4F4F4',
      }
    }),
  }, 

  typography: {
    fontFamily: 'Montserrat, Arial',
    h1:{
      fontSize: '1.8em',
      cursor:'default'
    },
    h3:{
      fontSize: '1em',
      cursor:'default',
    },
    h5:{
      cursor:'default'
    },
  }
  });

export const ColorModeContext = createContext({
  toggleColorMode: () =>{},
})

export const useMode = ()=>{
  const [mode, setMode] = useState<PaletteMode>('dark');

  const colorMode = useMemo(
    ()=>({
      toggleColorMode: ()=>{
        setMode((prevMode: PaletteMode)=>(prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    [],
  );

  const theme: any = useMemo(()=>createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];

}
