import { useTheme } from '@mui/material/styles';
import { useContext } from "react";
import { ColorModeContext } from "../theme/ThemeProvider";
import { Box, Container, Divider, IconButton, Link, Typography } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    const theme = useTheme()
    const colorMode = useContext(ColorModeContext)
    const hoverBtn = {
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      width:'3.9em',
      height:'100%',
      padding:2,
      "&:hover": {
        fontWeight: 500,
        borderRadius:'5px',
        borderColor: 'primary.main',
        bgcolor: 'secondary.hover'
        
      },
      '&.active':{
        fontWeight: 500,
        borderRadius:'5px',
        borderColor: 'primary.main',
        bgcolor: 'secondary.hover'
      }
    }

  return (

    <Box display='flex' width='100%' height='fit-content' justifyContent='center' alignItems='center' sx={{bgcolor:'background.default', borderColor:'neutral.dark', position:'sticky', top:0, zIndex:3}}>
      <Container sx={{display:'flex',width:{xs:'80%', md:'60%'}, justifyContent:'space-between', alignItems:'center', my:2}}>
      <Link component={NavLink} underline='none' to='/'>
        <IconButton sx={{p:0 }}>
          <Typography variant='h1' color='primary.main' fontWeight='600' position='relative'>D</Typography>
          <Divider sx={{bgcolor:'background.default', width:'30px', height:'5px', position:'absolute',transform:'rotate(90deg)', m:{xs:2, sm:1, md:0} }}/>
        </IconButton>
      </Link>
        
        <Box width={{xs:'70%', md:'50%'}} display='flex' justifyContent='space-between' height='1.5em'>
          <Link component={NavLink} color='text.primary'  sx={hoverBtn}underline='none' to='/Portfolio/'>Home</Link>
          <Link component={NavLink} color='text.primary' sx={hoverBtn} underline='none' to='/About'>About</Link>
          <Link component={NavLink} color='text.primary' sx={hoverBtn} underline='none' to='/Project'>Project</Link>
        </Box>

        <IconButton onClick={colorMode.toggleColorMode} sx={{color:'backgroun.default', bgcolor:'primary.main', "&:hover": {
             backgroundColor: 'primary.main'
          },}}>
            {theme.palette.mode === 'dark' ? <DarkModeOutlinedIcon />: <LightModeOutlinedIcon/>}
        </IconButton>
      </Container>
    </Box>
  )
}

