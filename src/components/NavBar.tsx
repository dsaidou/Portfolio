import { useTheme } from '@mui/material/styles';
import { useContext, useState } from "react";
import { ColorModeContext } from "../theme/ThemeProvider";
import { Box, Container, Divider, IconButton, Link, Typography } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import {motion} from 'framer-motion';

export default function NavBar() {
    const theme = useTheme()
    const colorMode = useContext(ColorModeContext)
    const hoverBtn = {
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      width:'80px',
      height:'100%',
      padding:1,
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

    const hoverBtnToggle = {
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      width:'100%',
      height:'fit-content',
      color:'background.default',
      marginY:1,
      padding:1,

      "&:hover": {
        fontWeight: 600,
        
      },
      '&.active':{
        fontWeight: 600,
      }
    }

    const [isOpen, setIsOpen] = useState(false);

    const variants = {
      open: { opacity: 1, y: 0, transition: {
        duration: 0.6
      } },
      closed: { opacity: 0, y: "-100%", transition: {
        duration: 0.8
      }},
    }

  return (
<>
    <Box display='flex' width='100%' height='fit-content' justifyContent='center' alignItems='center' sx={{bgcolor:{xs:'primary.main', sm:'background.default'}, position:'sticky', top:0, zIndex:4, flexDirection:'column'}}>

      <Container sx={{display:'flex',width:{xs:'100%', md:'70%'}, justifyContent:'space-between', alignItems:'center', my:2, marginBottom:'0.5em'}}>

        {/* Icon NavBar Desktop */}

      <Link component={NavLink} underline='none' to='/Portfolio/' sx={{display:{xs:'none', sm:'inline-block'}}}>
        <IconButton>
          <Typography variant='h1' color='primary.main' fontSize='2rem' fontWeight='600' position='relative'>D</Typography>
          <Divider sx={{bgcolor:'background.default', width:'30px', height:'5px', position:'absolute',transform:'rotate(90deg)', m:{xs:2, sm:1, md:0} }}/>
        </IconButton>
      </Link>

      {/* Icon Menu Reponsive */}

      <IconButton sx={{display:{xs:'inline-block', sm:'none'}}} onClick={()=>setIsOpen(!isOpen)}>
        {isOpen ? <CloseIcon/> : <MenuIcon/> }
      </IconButton>

        {/* NavBar Desktop */}

        <Box width={{xs:'70%', md:'60%'}} display={{sm:'flex', xs:'none'}} justifyContent='space-between' height='1.5em'>
          <Link component={NavLink} color='text.primary'  sx={hoverBtn}underline='none' to='/Portfolio/'>Home</Link>
          <Link component={NavLink} color='text.primary' sx={hoverBtn} underline='none' to='/Portfolio/About'>About</Link>
          <Link component={NavLink} color='text.primary' sx={hoverBtn} underline='none' to='/Portfolio/Project'>Project</Link>

        </Box>

        {/* DarkMode Button */}

        <IconButton onClick={colorMode.toggleColorMode} sx={{color:'background.default', bgcolor:'primary.main', "&:hover": {
             backgroundColor: 'primary.main'
          },}}>
            {theme.palette.mode === 'dark' ? <DarkModeOutlinedIcon />: <LightModeOutlinedIcon/>}
        </IconButton>
      </Container>
      
    </Box>

        {/* NavBar Responsive */}

    <Box width='100%' height='100%' display={isOpen ? 'flex' :'none'} sx={{bgcolor:'background.main', zIndex:'3', position:'fixed', flexDirection:'column'}} 
    onClick={()=>setIsOpen(!isOpen)}
    component={motion.div}
    animate={isOpen ? 'open' : 'closed'}
    variants={variants}
    
    >

      <Box width='100%' height='50%' sx={{bgcolor:'secondary.default', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
        <Link component={NavLink} color='text.primary' sx={hoverBtnToggle} underline='none' to='/Portfolio/'>Home</Link>
        <Link component={NavLink} color='text.primary' sx={hoverBtnToggle}  underline='none' to='/Portfolio/About'>About</Link>
        <Link component={NavLink} color='text.primary' sx={hoverBtnToggle}  underline='none' to='/Portfolio/Project'>Project</Link>
      </Box>

    

</Box>

    </> 
  )
}

