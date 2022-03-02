import React from 'react'
import { Avatar, Paper, Typography, Grid } from '@mui/material';


function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

export default function Profile() {
  return ( 
      <Grid container spacing={10}>
        <Grid item>
        <Avatar 
          alt="Kevin Crawford"
          style={{ width: 175, height: 175, fontSize: '75px' }}
          {...stringAvatar('Kevin Crawford')} 
        />
        </Grid>

        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" >
            <Grid item xs>
            <Typography style={{fontSize:'25px'}}> 
                Employee ID: 007
              </Typography>
              <Typography style={{fontSize:'25px'}}> 
                Name: Kevin Crawford
              </Typography>
              <Typography style={{fontSize:'25px'}}> 
                Region: Toronto
              </Typography>
              <Typography style={{fontSize:'25px'}}> 
                Email: crawfordkevin101@gmail.com
              </Typography>
              <Typography style={{fontSize:'25px'}}> 
              Phone Number: (905)341-9128
            </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  )
}