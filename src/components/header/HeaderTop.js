import React, { useState } from 'react';
import { PostMenu } from './PostMenu';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

// 以下のリンクを参照する
// https://material-ui.com/components/tabs/

export const HeaderTop = () => {
  const classes = useStyles();

  // ボタン切り替えテスト用
  const [log, setLog] = useState(true);
  const switchLog = () => {
    setLog(!log);
  };

  const style = {
    color: '#7c9cdb',
    paddingRight: '10px',
  }

  return (

    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Anime Post
          </Typography>
          <button onClick={switchLog} style={style}>切り替え</button>
          {
            // 本番ではログインができていれば
            log
              ?
              <>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{ marginRight: 10 }} />
                <PostMenu />
              </>
              :
              <>
                <Button color="inherit" style={{ marginRight: 10 }} >Login</Button>
                <Button style={{ background: '#31b4b2' }} >
                  新規登録
                </Button>
              </>
          }
        </Toolbar>
      </AppBar>
    </div>

  );
};