import { BrowserRouter, Route, Link } from 'react-router-dom'
import Container from '@material-ui/core/Container';
import { DataList } from './DataList';
import { Tagus } from './Tagus';
import { Rank } from './Rank';
import { Tabs, TabList, Tab } from "@chakra-ui/react"
import { Profile } from "./Profile";

export const MainMenu = () => {

  return (
    <div>
      <BrowserRouter>
        {/* ---------スクロースしてもついてくるメニュー--------- */}
        <Tabs style={{ position: 'sticky', top: 0, background: 'white', zIndex: 5 }}>
          <TabList >
            <Link to='/'><Tab>Home</Tab></Link>
            <Link to='/rank'><Tab>rank</Tab></Link>
            <Link to='/tagus'><Tab>tagus</Tab></Link>
          </TabList>
        </Tabs>
        {/* ------------------------------------ */}
        <hr />

        <Container fixed style={{ maxWidth: 1640 }}>
          {/* MainMenuのリスト*/}
          <Route exact path='/'
            render={(props) => <DataList />} />

          <Route path='/rank'
            render={(props) => <Rank />} />

          <Route path='/tagus'
            render={(props) => <Tagus />} />

          {/* 未使用-プロフィール画面は第２ステップ */}
          <Route path='/id/profile/'
            render={(props) => <Profile />} />

        </Container>
      </BrowserRouter>
    </div>
  );
};