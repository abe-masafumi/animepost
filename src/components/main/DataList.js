import { Data } from './Data';
import Box from '@material-ui/core/Box';

// 感覚の開け方のDocument
// https://material-ui.com/system/spacing/#horizontal-centering
export const DataList = () => {

  return (
    <div style={{ width: '100%' }}>
      {/* スペース */}
      <div style={{ height: 20 }} />

      <div>
        作品一覧
      </div>

      {/* material-uiの記述 */}
      <Box
        display="flex"
        p={1}
        m={1}
        bgcolor="background.paper"
        style={{ width: '98%', overflowX: 'auto', display: 'inlineBlock' }}
      >
        {/* 作品一覧（本番はデータベースの数だけ表示） */}
        <Box m={1} p={1} ><Data /></Box>
        <Box m={1} p={1} ><Data /></Box>
        <Box m={1} p={1} ><Data /></Box>
        <Box m={1} p={1} ><Data /></Box>
        <Box m={1} p={1} ><Data /></Box>
        <Box m={1} p={1} ><Data /></Box>
        <Box m={1} p={1} ><Data /></Box>
        <Box m={1} p={1} ><Data /></Box>
        <Box m={1} p={1} ><Data /></Box>
        <Box m={1} p={1} ><Data /></Box>
        <Box m={1} p={1} ><Data /></Box>
        <Box m={1} p={1} ><Data /></Box>
        <Box m={1} p={1} ><Data /></Box>
        <Box m={1} p={1} ><Data /></Box>
        <Box m={1} p={1} ><Data /></Box>
        <Box m={1} p={1} ><Data /></Box>
        <Box m={1} p={1} ><Data /></Box>
        <Box m={1} p={1} ><Data /></Box>
        <Box m={1} p={1} ><Data /></Box>

      </Box>
      {/* --------------------------- */}
      {/* --------------------------- */}
      <div>
        新着作品
      </div>
      {/* material-uiの記述 */}
      <Box
        display="flex"
        p={1}
        m={1}
        bgcolor="background.paper"
        style={{ width: '98%', overflowX: 'auto', display: 'inlineBlock' }}
      >
        {/* 作品一覧（本番はデータベースの数だけ表示） */}
        <Box m={1} p={1} ><Data /></Box>
        <Box m={1} p={1} ><Data /></Box>
        <Box m={1} p={1} ><Data /></Box>
        <Box m={1} p={1} ><Data /></Box>
        <Box m={1} p={1} ><Data /></Box>
        <Box m={1} p={1} ><Data /></Box>
        <Box m={1} p={1} ><Data /></Box>
        <Box m={1} p={1} ><Data /></Box>
        <Box m={1} p={1} ><Data /></Box>
        <Box m={1} p={1} ><Data /></Box>
        <Box m={1} p={1} ><Data /></Box>
        <Box m={1} p={1} ><Data /></Box>
        <Box m={1} p={1} ><Data /></Box>
        <Box m={1} p={1} ><Data /></Box>
        <Box m={1} p={1} ><Data /></Box>
        <Box m={1} p={1} ><Data /></Box>
        <Box m={1} p={1} ><Data /></Box>
        <Box m={1} p={1} ><Data /></Box>
        <Box m={1} p={1} ><Data /></Box>
      </Box>
      {/* --------------------------- */}

    </div>
  );
};