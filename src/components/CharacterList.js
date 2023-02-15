import React, { useContext } from "react";
import { RickMortyContext } from "../context";
import { makeStyles } from "@material-ui/core/styles";
import { ImageList } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    overflow: "hidden",
  },
  gridList: {
    width: "100%",
  },
}));

const CharactersList = () => {
  const classes = useStyles();
  const appContext = useContext(RickMortyContext);
  const { data } = appContext;

  return (
    <ImageList className={classes.gridList} >
      {data.map((char) => (
        <div key={char.id}>
          <h2>{char.name}</h2>
        </div>
      ))}
    </ImageList>
  );
};

export default CharactersList;