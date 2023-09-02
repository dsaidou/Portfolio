import { Box, Grid, Link, Typography } from "@mui/material";
import { nanoid } from 'nanoid';
// import { motion, useInView, useAnimation } from 'framer-motion';
import{ motion } from 'framer-motion';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import PastaLifeScreenshot from '../assets/PastaLifeScreenshot.png';
import NaturalShopScreenshot from '../assets/NaturalShopScreenshot.png';
// import { useEffect, useRef } from "react";


export default function ProjectCard() {
    const projectLeft =[
        {
            name:'PastaLife',
            text:'This project is a restaurant website created in order to learn more about designing fonctionnal day to day website. In fact, restaurant website are an average style of design that every developpers should be able to realize.',
            image:PastaLifeScreenshot,
            description:'PastaLife website image',
            linkWebsite:'https://dsaidou.github.io/PastaLife/',
            linkGithub:'https://github.com/dsaidou/PastaLife',
            
            id: nanoid(),
            tech: [
                {name:'ReactJS', id: nanoid()},
                {name:'Javascript', id: nanoid()},
                {name:'HTML', id: nanoid()},
                {name:'CSS', id: nanoid()},
            ]

        },
        
    ]

    const projectRight =[
        {
            name:'Natural.',
            text:'This website is a fruit juice compagny that i designed because a shop website is an average design that a developper should be able to realize on demand. Therefore i practiced creating simple but useful designs through this project.',
            image:NaturalShopScreenshot,
            description:'Natural website image',
            linkWebsite:'https://dsaidou.github.io/NaturalShop/',
            linkGithub:'https://github.com/dsaidou/NaturalShop',
            id: nanoid(),
            tech: [
                {name:'ReactJS', id: nanoid()},
                {name:'Javascript', id: nanoid()},
                {name:'HTML', id: nanoid()},
                {name:'CSS', id: nanoid()},
            ]
        }
    ]

    // ANIMATION CONTROL

    // const ref = useRef(null);
    // const isInView = useInView(ref, {once:true});
    // const controls = useAnimation();

    // useEffect(() => {
    //     if(isInView) {
    //        controls.start("visible") 
    //     }
    //     console.log(isInView)
    // },[isInView]);

  return (
        <>
{projectLeft.map((item)=>{
        return(
        <Box width='100%' display='flex' alignItems='center'
        flexDirection={{xs:'column', sm:'column', md:'row'}}
        mb={3} justifyContent='space-between' p={{xs:0, md:1,sm:0}} 
        key={item.id}
        component={motion.div}
        initial={{x: '10px', opacity: 0}}
        animate={{x: '0', opacity:1, transition:{ duration: 0.5 }}}
        // ref={ref}
        // variants={{         
        //     hidden:{x: '-10px', opacity: 0},
        //     visible:{x: '0', opacity:1},
        // }}
        // initial="hidden"
        // animate={controls}
        // transition={{duration: 0.5}}
        >

            <Box
                component="img"
                sx={{
                border:1,
                borderColor:'primary.main',
                borderRadius:'10px',
                height: 233,
                width: 330,
                maxHeight: { xs: 140, md: 140 },
                maxWidth: { xs: 260, md: 240 },
                }}
                alt={item.description}
                loading="lazy"
                src={item.image}
            />
            
            <Box m={1} ml={{xs:0,sm:0, md:4 }}>
                <Box display='flex' width="100%"
                alignItems='center' justifyContent={{sm:'left', xs:'center'}} >
                    <Typography component={Link} href={item.linkWebsite} target='_blank' underline='none' color='text.primary' variant="h5" sx={{fontWeight:'bold', mr:1, cursor:'pointer'}}>{item.name}</Typography>

                    <Link href={item.linkWebsite} target='_blank' component={motion.a}
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}>
                        <OpenInNewIcon sx={{mt:1, color:'text.primary'}}/>
                    </Link>
                    <Link href={item.linkGithub} target='_blank'
                    component={motion.a}
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}>
                        <GitHubIcon sx={{mt:1, color:'text.primary', ml:1}}/>
                    </Link>
                </Box>
                
                <Typography paragraph  textAlign={{sm:'left', xs:'center'}} fontWeight='light' mt={1} > {item.text} </Typography>
                <Grid container width='100%' height='fit-content' >
                    {item.tech.map((item)=>{
                    return(
                        <Grid item key={item.id} sx={{bgcolor:'primary.main', width:'fit-content', px:3, py:0.3, borderRadius:'15px', color:'background.default', fontWeight:'600', m:0.4, fontSize:'0.8em', cursor:'default'}}>{item.name}</Grid>
                    )
                    })}
                </Grid>
            </Box>
          
        </Box>
        )
       
    })}

    {projectRight.map((item)=>{
        return(
            <Box width='100%' display='flex' alignItems='center'
            flexDirection={{xs:'column', sm:'column', md:'row'}}
            mb={3} justifyContent='space-between' p={1} 
            key={item.id}
            component={motion.div}
            initial={{x: '10px', opacity: 0}}
            animate={{x: '0', opacity:1, transition:{ duration: 0.5 }}}
            >
            
            <Box mr={4} m={1}>
                <Box display='flex' width="100%"
                alignItems='center' justifyContent={{sm:'left', xs:'center'}}>
                    <Typography  component={Link} href={item.linkWebsite} target='_blank' underline='none' color='text.primary' variant="h5" sx={{fontWeight:'bold', mr:1, cursor:'pointer'}}>{item.name}</Typography>

                    <Link href={item.linkWebsite} target='_blank'
                    component={motion.a}
                    whileHover={{scale:1.05}}
                    whileTap={{scale:0.9}}>
                        <OpenInNewIcon sx={{mt:1, color:'text.primary'}}/>
                    </Link>

                    <Link href={item.linkGithub} target='_blank'
                    component={motion.a}
                    whileHover={{scale:1.05}}
                    whileTap={{scale:0.9}}>
                        <GitHubIcon sx={{mt:1, color:'text.primary', ml:1}}/>
                    </Link>

                </Box>
                
                <Typography paragraph  textAlign={{sm:'left', xs:'center'}} fontWeight='light' mt={1} > {item.text} </Typography>
                <Grid container width='100%' height='fit-content' >
                    {item.tech.map((item)=>{
                    return(
                        <Grid item key={item.id} sx={{bgcolor:'primary.main', width:'fit-content', px:3, py:0.3, borderRadius:'15px', color:'background.default', fontWeight:'600', m:0.4, fontSize:'0.8em', cursor:'default'}}>{item.name}</Grid>
                    )
                    })}
                </Grid>
            </Box>
            <Box
        component="img"
        sx={{
          mt:{xs:2, sm:2, md:0},
          border:1,
          borderColor:'primary.main',
          borderRadius:'10px',
          height: 233,
          width: 330,
          maxHeight: { xs: 140, md: 140 },
          maxWidth: { xs: 260, md: 240 },
        }}
        alt={item.description}
        loading="lazy"
        src={item.image}/>
        
        </Box>
        )
       
    })}
    </>
  )
}
