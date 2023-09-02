import { Grid, IconButton, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import DescriptionIcon from '@mui/icons-material/Description';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import {nanoid} from 'nanoid';
import {motion} from 'framer-motion';


export default function GridLink() {
    const link = [
        {name:'Github', link:'https://github.com/dsaidou', icon:<GitHubIcon sx={{color:'background.default'}}/>, id:nanoid()},
        {name:'LinkedIn', link:'https://www.linkedin.com/in/dariyasaidou/', icon:<LinkedInIcon sx={{color:'background.default'}}/>, id:nanoid()},
        {name:'CV', link:'/Portfolio/Alternance CV.pdf', icon:<DescriptionIcon sx={{color:'background.default'}}/>, id:nanoid()},
        {name:'Mail', link:'mailto:saidoud818@gmail.com', icon:<EmailIcon sx={{color:'background.default'}}/>, id:nanoid()}
    ]

  return (
    <Grid container width={{md:'230px', xs:'100%'}} columns={{ xs: 6, sm:6,md: 12}}
        component={motion.div}
        initial={{y:'-50px', opacity: 0}}
        animate={{y:'0', opacity:1, transition:{ duration: 0.6 }}}>
        {link.map((item)=>{
            return(
                <Grid item xs={6} sm={6} md={12} ml={1} mb={1}
                 bgcolor='secondary.hover' borderRadius='5px' display='flex' alignItems='center' p={0.5} sx={{
                    "&:hover": {
                        backgroundColor: 'secondary.main'},
                 }}
                 key={item.id}
                 >
                    <IconButton component={Link} href={item.link} target='_blank' >
                        {item.icon}
                    </IconButton>
                    <Link href={item.link} underline='none' target='_blank' sx={{color:'background.default', }}>{item.name}</Link>
                    <Link href={item.link} underline='none' target='_blank' sx={{alignSelf:'flex-end', ml:'auto', my:1}}>
                        <OpenInNewIcon sx={{color:'background.default', fontSize:'1.3em', mt:1, mr:2}}/>
                    </Link>
                </Grid>
            )
        })}
    </Grid>
  )
}
