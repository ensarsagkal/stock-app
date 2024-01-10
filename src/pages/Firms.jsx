import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useStockCalls from '../service/useStockCalls';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import AddFirm from '../components/AddFirm';

import ModalFirm from '../components/ModalFirm';

export default function Firms() {
  const {getFirms,deleteFirm}= useStockCalls()
  useEffect(() => {
    getFirms()
  
 
  }, [])
  
  const {firms}= useSelector(state=>state.stock)
  return (
    <Grid container spacing={3}>
      <ModalFirm/>
      {firms.map((firm,index)=>(
        <Grid  item key={index} >
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={firm.image}
        title={firm.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {firm.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {firm.address}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {firm.phone}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
        <Button size="small"onClick={()=>deleteFirm(firm._id)}>Delete</Button>
      </CardActions>
    </Card>
        </Grid>
      ))}
      
      
    </Grid>
  );
}
