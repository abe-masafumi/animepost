import { BrowserRouter, Route, Link } from 'react-router-dom'
import Container from '@material-ui/core/Container';
import { DataList } from './DataList';
import { Tagus } from './Tagus';
import { Rank } from './Rank';
import { Tabs, TabList, Tab } from "@chakra-ui/react"

export const MainMenu = () => {

  return (
    <div>
      <BrowserRouter>
        {/* スクロースしてもついてくるメニュー */}
        <Tabs style={{ position: 'sticky', top: 0, background:'white', zIndex:5 }}>
        <TabList >
          <Tab><Link to='/'>Home</Link></Tab>
          <Tab><Link to='/rank'>rank</Link></Tab>
          <Tab><Link to='/tagus'>tagus</Link></Tab>
        </TabList>
        </Tabs>
  
          <hr />

        <Container fixed style={{ maxWidth: 1640 }}>
          {/* MainMenuのリスト*/}
          <Route exact path='/'
            render={(props) => <DataList />} />

          <Route path='/rank' 
          render={(props) => <Rank />} />

          <Route path='/tagus' 
          render={(props) => <Tagus />} />

        </Container>
      </BrowserRouter>
    </div>
  );
};