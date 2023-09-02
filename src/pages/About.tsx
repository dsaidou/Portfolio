import { Box, Container, Grid, Typography } from "@mui/material";
import ButtonCTA from "../components/ButtonCTA";
import GridLink from "../components/GridLink";


export default function About() {
  return (
   <section>
    <Container sx={{display:'flex', flexDirection:'column', width:{xs:'100%', md:'60%'}, height:'100%', alignItems:'center', marginTop:4, paddingX:{xs:'2em', md:'0'}}}>

    
       <Box width='100%' height='fit-content' marginBottom={1} display='flex' flexDirection='column' alignItems={{xs:'center', md:'flex-start'}}>
        <Typography variant='h1' sx={{fontWeight:'bold', color:'primary.main'}}> About Me</Typography>

      </Box>

      <Grid container columnGap={6} columns={{ xs: 6, sm:6,md: 8}}  >
        <Grid item xs={6} sm={6} md={4} pr={2} display='flex' flexDirection='column' alignItems={{xs:'center', md:'flex-start'}}>
          <Typography paragraph sx={{cursor:'default'}} mb={3} fontWeight='300' fontSize='0.9em'>Get to know me</Typography>
            <Typography paragraph sx={{cursor:'default'}}>Hi, I am Dariya !</Typography>

            <Typography paragraph textAlign={{sm:'left', xs:'center'}} sx={{cursor:'default'}}>
            I found myself passionnated about web pages, web designs and everything around web developpment quickly, a year ago, since then I never stopped trying to improve my skills as much as my knowledge around web technologies. 
            </Typography>

            <Typography paragraph textAlign={{sm:'left', xs:'center'}} sx={{cursor:'default'}}>
            I do not lack of ambition therefore I learnt about HTML, CSS, Javascript, Typescript and React JS on my own. 
            </Typography>

            <Typography paragraph textAlign={{sm:'left', xs:'center'}} sx={{cursor:'default'}} mb={3}>
            Currently, i am looking for an apprenticeship  in web developpement. I am always ready to use my knowledge and improve myself. 
            </Typography>
            <ButtonCTA  name='View my project' link='/Project' />
            
          </Grid>

          <Grid item xs={6} sm={6} md={3} mt={{xs:5, md:0, sm:5}} px={4} paddingBottom={{xs:4, md:0}} display='flex' flexDirection='column' alignItems={{xs:'center', md:'flex-start'}}>

          <Typography paragraph  sx={{cursor:'default'}} mb={3} fontWeight='300' fontSize='0.9em'>To connect</Typography>
          <GridLink/>

          </Grid>

      </Grid>

    </Container>
   </section>
  )
}
