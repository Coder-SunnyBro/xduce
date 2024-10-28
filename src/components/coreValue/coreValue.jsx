// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Box } from '@mui/material';
import ceoImage from '../../assets/Ceo.png';
import coreValueImage from '../../assets/coreValue.webp';
import './coreValue.css'

const CoreValue = () => {
  // Using a placeholder image URL
  const placeholderImage = "https://via.placeholder.com/400";

  return (
    <div className="container-new py-12 px-4 md:px-6 h-[530px] w-full">
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Card className="h-auto">
            <CardContent className="p-0">
              <Typography variant="h5" component="h2" className="text-center font-bold py-5">
                President's Message
              </Typography>
              <Grid container>
                <Grid item xs={12} md={5} className='flex-center'> 
                <Grid className='flex justify-center items-center'>

                  <CardMedia
                    component="img"
                    image={ceoImage}
                    alt="President"
                    className="w-full h-full object-contain"
                    sx={{ height: { xs: '250px', md: '300px' } }}
                  />
                </Grid>           
                
            <Grid className='my-3'>
                  <strong variant="subtitle1" className="mb-2 text-gray-600">
                      JAY DAVE, President & CEO
                    </strong>
            </Grid>
              
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box className="p-4 flex flex-col h-auto">
                    <Typography variant="body2" className="text-gray-600 mb-4 text-10xl">
                      XDuce stands for 'leadership with the X factor'. We multiply client growth by X factor for their area of
                      specialization. We invest in our people and our talent is always supplemented with new solutions, new
                      technologies and the best practices. With motivation levels at an all-time high, we believe in teamwork,
                      a general sense of collaboration, and a strong 'growth oriented' approach for professional and personal
                      development of our workforce.
                    </Typography>
                    <strong variant="body1" className="font-extrabold py-3">
                      Right Quality | Right Time | Right Price | Right Resource
                    </strong>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className="h-full">
            <CardContent className="flex flex-col items-center space-y-4">
              <Typography variant="h5" component="h2" className="text-center font-bold mb-4">
                Core Values
              </Typography>
              <Grid className='flex'>
              <CardMedia
                component="img"
                image={coreValueImage}
                alt="Core Values"
                className="w-64 h-64 rounded-lg object-cover mb-4"
              />
              </Grid>
              <ul className="list-disc-none pl-6 space-y-1">
                <li>Leadership with the X factor</li>
                <li>Client-centric approach</li>
                <li>Teamwork and collaboration</li>
              </ul>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default CoreValue;

{/* <div className="w-full h-[600px] border border-dark-900 justify-center items-center flex">
                    <div className="w-[70%] border border-danger p-5 justify-between items-center flex">
                        <div className="w-[35%]">hello</div>
                        <div className="w-[25%]">hello</div>
                    </div>
            </div> */}