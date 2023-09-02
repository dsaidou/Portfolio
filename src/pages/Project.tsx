import { Box, Container, Grid, Typography } from "@mui/material";
import ProjectCard from "../components/ProjectCard";
import ButtonCTA from "../components/ButtonCTA";


export default function Project() {
  return (
    <section>
      <Container sx={{display:'flex', flexDirection:'column', width:{xs:'100%', md:'60%'}, paddingX:{xs:'2em', md:'0'}, height:'100%', alignItems:'center', marginTop:4}}>
        <Box width='100%' height='fit-content' marginBottom={{xs:4, md:1}} display='flex' flexDirection='column' alignItems={{xs:'center', md:'flex-start'}}>
          <Typography variant='h1' sx={{fontWeight:'bold', color:'primary.main', mb:1}}> My projects</Typography>
          <Typography variant='h3' sx={{fontWeight:'light'}}>All my work</Typography>
        </Box>

        <ProjectCard/>

        <Grid container columns={{ xs: 6, sm:6,md: 6}} width='100%' height='fit-content'  p={1} paddingBottom={{xs:4, md:0}} alignItems='center'>
            <Grid item xs={6} sm={6} md={4} textAlign={{xs:'center', md:'left'}}>
              <Typography paragraph>I am currently looking for an apprenticeship in web developpment, i am ready to learn quickly and efficiently. </Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={2}  textAlign='center' pb={{xs:1}} >
          
              <ButtonCTA name='Contact me' link='mailto:saidoud818@gmail.com'/>
            </Grid>
            

        </Grid>

      </Container>
    </section>
  )
}
