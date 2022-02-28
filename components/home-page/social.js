import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Grid } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { ClassNames } from '@emotion/react';

const socialItems = [
  { icon: FacebookIcon, url: '/', id: 'facebook' },
  { icon: TwitterIcon, url: '/', id: 'twitter' },
  { icon: InstagramIcon, url: '/', id: 'instagram' },
];

function Social() {
  return (
    <Grid container direction='column' spacing={1}>
      {socialItems.map((item) => {
        return (
          <Grid item key={item.id}>
            <IconButton sx={{ color: 'white' }}>
              <item.icon />
            </IconButton>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Social;
