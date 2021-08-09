import { Data } from './Data';
import Box from '@material-ui/core/Box';

// 感覚の開け方のDocument
// https://material-ui.com/system/spacing/#horizontal-centering
export const DataList = () => {

  return (
    <div style={{ width:'100%' }}>
      <Box
        display="flex"
        flexWrap="wrap"
        p={1}
        m={1}
        bgcolor="background.paper"
        sx={{ maxWidth:1640 }}
      >

        <Box m={1} p={1} bgcolor="grey.300" ><Data /></Box>
        <Box m={1} p={1} bgcolor="grey.300" ><Data /></Box>
        <Box m={1} p={1} bgcolor="grey.300" ><Data /></Box>
        <Box m={1} p={1} bgcolor="grey.300" ><Data /></Box>
        <Box m={1} p={1} bgcolor="grey.300" ><Data /></Box>
        <Box m={1} p={1} bgcolor="grey.300" ><Data /></Box>
        <Box m={1} p={1} bgcolor="grey.300" ><Data /></Box>
        <Box m={1} p={1} bgcolor="grey.300" ><Data /></Box>
        <Box m={1} p={1} bgcolor="grey.300" ><Data /></Box>
        <Box m={1} p={1} bgcolor="grey.300" ><Data /></Box>
        <Box m={1} p={1} bgcolor="grey.300" ><Data /></Box>
        <Box m={1} p={1} bgcolor="grey.300" ><Data /></Box>
        <Box m={1} p={1} bgcolor="grey.300" ><Data /></Box>
        <Box m={1} p={1} bgcolor="grey.300" ><Data /></Box>
        <Box m={1} p={1} bgcolor="grey.300" ><Data /></Box>
        <Box m={1} p={1} bgcolor="grey.300" ><Data /></Box>
        <Box m={1} p={1} bgcolor="grey.300" ><Data /></Box>
        <Box m={1} p={1} bgcolor="grey.300" ><Data /></Box>
        <Box m={1} p={1} bgcolor="grey.300" ><Data /></Box>
        <Box m={1} p={1} bgcolor="grey.300" ><Data /></Box>


      </Box>
    </div>

  );
};