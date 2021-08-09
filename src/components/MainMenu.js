import { BrowserRouter, Route, Link } from 'react-router-dom'
import Container from '@material-ui/core/Container';
import { DataList } from './DataList';
import { spacing } from '@material-ui/system';

export const MainMenu = () => {
  const rank = () => {
    return (
      <div>
        <p>RRR</p>
      </div>
    );
  };
  const tags = () => {
    return (
      <div>
        <p>TTT</p>
      </div>
    );
  };

  return (
    <div>
      {/* route機能の参考サイト */}
      {/* https://cpoint-lab.co.jp/article/201810/5664/ */}
      <BrowserRouter>
        {/* スクロースしてもついてくるメニュー */}
        <div style={{ position: 'sticky', top: 10 }}>
          <ul style={{ display: 'flex', listStyle:'none' }}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/rank'>rank</Link></li>
            <li><Link to='/tagus'>tagus</Link></li>
          </ul>
          <hr />
        </div>

        <Container fixed style={{ maxWidth: 1640 }}>
          {/* MainMenuのリスト*/}
          <Route exact path='/'
            render={(props) => <DataList />} />

          <Route path='/rank' component={rank} />

          <Route path='/tagus' component={tags} />

        </Container>
      </BrowserRouter>
    </div>
  );
};