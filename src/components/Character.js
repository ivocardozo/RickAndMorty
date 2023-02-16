import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import classes from './Character.module.css';


const Character = ({ name, image }) => {

  return (
    <div>
      <div className={classes.root}>
        <img src={image} alt={name} className={classes.img} />
      </div>
    </div>
  );
};

export default Character;
