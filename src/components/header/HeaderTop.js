import React, { useState } from 'react';
import { PostMenu } from './PostMenu';
import walletcss from "./CssMain.module.css";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { BrowserRouter, Route, Link } from 'react-router-dom'

// material-uiの記述
// 以下のリンクを参照する
// https://material-ui.com/components/tabs/
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

export const HeaderTop = () => {
  // material-uiの記述
  const classes = useStyles();

  // ----------ウォレット接続メニューの表示切り替え----------
  const [walletMenue, setWalletMenue] = useState(false);

  function ContactWalletOpenmenue() {
    setWalletMenue(!walletMenue);
  }

  function closeMenue() {
    setWalletMenue(false);
  }
  // ------------------------------------------------------------
  // -------------ボタン切り替えテスト用(本番時削除)-----------
  const [log, setLog] = useState(true);
  const switchLog = () => {
    setLog(!log);
  };

  // --ボタンのスタイル本番では消す--
  const style = {
    color: '#7c9cdb',
    paddingRight: '10px',
  }
  // --------------------------------------------------------------
  return (
    <div className={classes.root}>
      {/* -----ウォレット接続メニュー（hidden）---- */}
      {walletMenue &&
        <>
          <div onClick={closeMenue} className={walletcss.mask}></div>
          <div className={walletcss.ContactWalletContainer}>
            <div className={walletcss.space80}></div>
            <h1>ウォレットを接続します</h1>
            <div className={walletcss.space40}></div>
            <p className={walletcss.sub}>ウォレットを接続することにより、利用規約と<br />
プライバシーポリシーに同意したことになります。</p>
            <div className={walletcss.space40}></div>
            <p className={walletcss.subinfo}>ウォレットを選択してください</p>
            <div className={walletcss.space20}></div>
            <div className={walletcss.walletbox}><p>Meta Mask</p></div>
            <div className={walletcss.space40}></div>
            <p className={walletcss.sub}>ウォレットとの接続でお困りですか？</p>
            <div className={walletcss.space10}></div>
            <p>ウォレット接続に関するQ&A</p>
            <div className={walletcss.space80}></div>
          </div>
        </>
      }
      {/* --------------------------- */}
      <AppBar position="static">
        <Toolbar>
          {/* ----企画名---- */}
          <Typography variant="h6" className={classes.title}>
            Anime Post
          </Typography>
          {/* --------------- */}
          <button onClick={switchLog} style={style}>切り替え</button>
          <BrowserRouter>
            {
              // 本番ではログインができていれば
              log
                ?
                <>
                  <Link to='/id/profile/'><Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{ marginRight: 10 }} /></Link>
                  <Link to='/id/post/'><PostMenu /></Link>
                </>
                : //ログインができていなければ
                <>
                  <Link to='/login/'><Button color="inherit" style={{ marginRight: 10 }} >Login</Button></Link>
                  <Link to='/touroku/'><Button onClick={ContactWalletOpenmenue} style={{ background: '#31b4b2' }} >
                    ウォレットに接続
                </Button></Link>
                </>
            }
          </BrowserRouter>
        </Toolbar>
      </AppBar>
    </div>
  );
};