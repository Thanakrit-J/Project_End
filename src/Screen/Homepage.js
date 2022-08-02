import React from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "./Homepage.css"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


const Homepage = () =>{
    return(

        <div class ="Home">
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="flex-end"
                style={{ minHeight: '30vh' }}>
                <Typography variant="h1" component="div" gutterBottom>
                     UP Smartcamera
                </Typography>
            </Grid>       
            <Stack spacing={2} direction="row" justifyContent="center" alignItems="flex-end">
                    <Button variant="contained">SIGN UP</Button>
                    <Button variant="outlined">SIGN IN</Button>
            </Stack>

                
        </div>
    )
}

export default Homepage