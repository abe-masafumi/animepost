import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(15),
      height: theme.spacing(5),
    },
  },
}));

export const Tagus = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper style={{ textAlign:'center' }} ><p style={{ marginTop:10 }}>#戦闘</p></Paper>
      <Paper style={{ textAlign:'center' }} ><p style={{ marginTop:10 }}>#学園</p></Paper>
      <Paper style={{ textAlign:'center' }} ><p style={{ marginTop:10 }}>#ホラー</p></Paper>
      <Paper style={{ textAlign:'center' }} ><p style={{ marginTop:10 }}>#恋愛</p></Paper>
      <Paper style={{ textAlign:'center' }} ><p style={{ marginTop:10 }}>#感動</p></Paper>
      <Paper style={{ textAlign:'center' }} ><p style={{ marginTop:10 }}>#戦闘</p></Paper>
      <Paper style={{ textAlign:'center' }} ><p style={{ marginTop:10 }}>#学園</p></Paper>
      <Paper style={{ textAlign:'center' }} ><p style={{ marginTop:10 }}>#ホラー</p></Paper>
      <Paper style={{ textAlign:'center' }} ><p style={{ marginTop:10 }}>#恋愛</p></Paper>
      <Paper style={{ textAlign:'center' }} ><p style={{ marginTop:10 }}>#感動</p></Paper>
      <Paper style={{ textAlign:'center' }} ><p style={{ marginTop:10 }}>#戦闘</p></Paper>
      <Paper style={{ textAlign:'center' }} ><p style={{ marginTop:10 }}>#学園</p></Paper>
      <Paper style={{ textAlign:'center' }} ><p style={{ marginTop:10 }}>#ホラー</p></Paper>
      <Paper style={{ textAlign:'center' }} ><p style={{ marginTop:10 }}>#恋愛</p></Paper>
      <Paper style={{ textAlign:'center' }} ><p style={{ marginTop:10 }}>#感動</p></Paper>
    </div>
  );
}