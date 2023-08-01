import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import photo from '../assets/PhotoCV.png'
import ButtonCTA from "../components/ButtonCTA";
import { nanoid } from 'nanoid'
import { motion } from 'framer-motion'



export default function Homepage() {
  const tech= [
    {name:'ReactJS', id: nanoid()},
    {name:'Javascript', id: nanoid()},
    {name:'TypeScript', id: nanoid()},
    {name:'HTML', id: nanoid()},
    {name:'CSS', id: nanoid()},
    {name:'SASS', id: nanoid()},
    {name:'Material UI', id: nanoid()},

  ]

  return (
    <section>
      <Container sx={{display:'flex', flexDirection:'column', width:{xs:'60%', md:'60%'}, height:'100%', alignItems:'center', marginTop:5}}>

        <Box width='100%' height='fit-content' marginBottom={6}>

          <Typography variant='h1' sx={{fontWeight:'bold', color:'primary.main', mb:1}}> Dariya Saidou</Typography>

          <Typography variant='h3' sx={{fontWeight:'light', cursor:'default'}}>Student in web development</Typography>
        </Box>

      <Box display='flex' justifyContent='space-between' alignItems='center' flexDirection={{xs:'column', sm:'column', md:'row'}} >

        <motion.div className="photo-container" 
        initial={{x: '-110px'}}
        animate={{x: '0', transition:{ duration: 0.6 }}} >

          <img src={photo} alt="photo de moi" />
          <div className="bg-photo"></div>
        </motion.div>

        <Box display='flex' height='fit-content' flexDirection='column' padding={2} marginLeft={{md:5, sm:0, xs:0}} marginTop={{xs:4, md:0, sm:0}}>

          <Typography variant="h1" my={3} fontWeight='bold'> Welcome, I am Dariya !</Typography>

          <Typography paragraph sx={{cursor:'default'}}>I love writing code and learn about new technologies. I am curious and always motivated by a new project because technologies are always evolving therefore i am ready to follow and learn in order to improve my skills. </Typography>

          <ButtonCTA name='Learn more' link='/About'/>
        </Box>

      </Box>

      <Box width='100%' display='flex' alignItems='center' mt={{xs:6, sm:6, md:12}} flexDirection={{xs:'column', md:'row'}}>

        <Typography paragraph sx={{cursor:'default'}} fontSize='1.2em' fontWeight='bold' textAlign='center' textTransform='uppercase'm={0} width='30%'>Tech skills</Typography>

        <Divider sx={{bgcolor:'text.primary', width:{xs:'70%', sm:'70%', md:'8%'}, transform:{xs:'rotate(0deg)', sm:'rotate(0deg)', md:'rotate(90deg)'}, m:{xs:2, sm:1, md:0} }}/>

        <Grid container width={{md:'100%', xs:'50%'}} columns={{xs:6, md:9, sm:6}}height='fit-content' 
        component={motion.div}
        initial={{x: '-40px', opacity: 0, zIndex:-1}}
        animate={{x: '0', opacity:1, transition:{ duration: 0.8 }}}>
    {tech.map((item)=>{
      return(
        <Grid item xs={6} md={2} sm={6} key={item.id} sx={{bgcolor:'primary.main', textAlign:'center',width:'fit-content', py:0.3, borderRadius:'15px', color:'background.default', fontWeight:'600', m:0.4, fontSize:'0.8em'}}>{item.name}</Grid>
      )
    })}
  </Grid>
      </Box>
      </Container>
      
    </section>
  )
}
