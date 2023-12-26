import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Twitter from '../../Component/Twitter/Twitter'
import LinkedIn from '../LinkedIn/LinkedIn';
import Instagram from '../Instagram/Instagram';
import profile from '../../Assets/bird.jpg.jpg'

export default function ProfileOverview() {
  const theme = useTheme();

  return (
    <Card sx={{ display: {lg: 'flex', md: 'block'}, width: { lg: 800, md: '100%'}, alignItems: 'center', justifyContent: 'center', margin: 'auto', padding: 5, gap: 5, boxShadow: '20px 8px 20px -2px rgba(16, 24, 40, 0.06), 0px 4px 20px -10px rgba(16, 24, 40, 0.10)' }}>
        <CardMedia
        component="img"
        sx={{ width:{ lg:250, md: '100%'}, borderRadius: {lg: 10}}}
        image={profile}
        alt="speaker"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant="subtitle2" color="text.secondary" component="div" style={{paddingBottom: 10}}>
            CREATIVE DESIGNER
          </Typography>
          <Typography component="div" variant="h5" style={{paddingBottom: 10}}>
            Esther Howarde
          </Typography>
          <Typography component="div" variant="p">
          Lorem ipsum dolor sit amet consectetur. Donec sodales et cursus aenean. Egestas risus nibh nisl ut ut morbi. Quam amet augue consequat orci eget in. Quis amet metus quis tempor. Sit bibendum fringilla vulputate est sit eu vitae purus. Tristique eget pretium at vitae est. Morbi sollicitudin mauris fermentum dolor praesent lacus sed posuere purus. Urna nunc eget porttitor aliquam facilisis fringilla cursus urna ultricies. Sit et leo cum semper. Tempor eu amet ac dignissim vitae felis leo. 
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'start', pl: 1, pb: 1 }}>
          <IconButton>
            <Instagram sx={{height: 30, width: 30}}/>
          </IconButton>
          <IconButton>
            <Twitter sx={{height: 30, width: 30}}/>
          </IconButton>
          <IconButton>
            <LinkedIn sx={{height: 30, width: 30}}/>
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
}