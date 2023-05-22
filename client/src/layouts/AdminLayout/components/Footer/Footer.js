import React from 'react';
import { Divider, Typography, Link } from '@material-ui/core';
import useStyles from './styles';

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Divider />
      <Typography className={classes.copyright} variant="body1">
        &copy; jihed Gharbi GO my code. 2023
      </Typography>
      <Typography variant="caption">
        Crafted with love  jihed Gharbi GO my code. 2023 |{' '}
        <Link href="http://gomycode.com/" target="_blank" rel="noopener">
        jihed Gharbi GO my code. 2023
        </Link>
      </Typography>
    </div>
  );
}
