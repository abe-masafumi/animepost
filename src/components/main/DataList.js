import { Data } from './Data';
import Box from '@material-ui/core/Box';
import { useState } from 'react';
import { pink } from '@material-ui/core/colors';


// 感覚の開け方のDocument
// https://material-ui.com/system/spacing/#horizontal-centering
export const DataList = () => {



  return (
    <div style={{ width: '100%' }}>
      {/* スペース */}
      <div style={{ height: 20 }} />


      <div>
        週刊人気作品
      </div>

      <Box
        display="flex"
        p={1}
        m={1}
        bgcolor="background.paper"
        style={{ width: '98%', overflowX: 'auto', display: 'inlineBlock' }}
      >

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

      <Box
        display="flex"
        p={1}
        m={1}
        bgcolor="background.paper"
        style={{ width: '98%', overflowX: 'auto', display: 'inlineBlock' }}
      >

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



