import { Button, Link } from "@mui/material";
import { NavLink } from "react-router-dom";
import {motion} from 'framer-motion'

interface Props{
  name:string
  link:string
}

export default function ButtonCTA({name, link}:Props) {
  const btnStyle ={
    borderRadius:'25px', 
    fontWeight:600,
    
    '&:hover':{
      color: 'background.default',
      bgcolor:'primary.main'
    }
  }
  const linkStyle ={
    display:'flex',
    alignSelf:{xs:'center', sm:'center', md:'end'},
    justifyContent:'center'
  }
  return (
    <Link component={NavLink} underline='none' to={link} sx={linkStyle}>
      <Button variant="outlined" sx={btnStyle}
      component={motion.div}
      whileHover={{scale:1.1}}
      whileTap={{scale:0.9}}
      >
        {name}
      </Button>
    </Link>
  )
}
