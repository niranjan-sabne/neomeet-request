import React, { useEffect, useState } from 'react';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { History } from '../../Api/HistoryInterface';
import { getHistory } from '../../Api/Api';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
   [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.error.light,
      color: theme.palette.common.white,
      fontSize: 20,
      fontFamily: [
         '-apple-system',
         'BlinkMacSystemFont',
         '"Segoe UI"',
         'Roboto',
         '"Helvetica Neue"',
         'Arial',
         'sans-serif',
         '"Apple Color Emoji"',
         '"Segoe UI Emoji"',
         '"Segoe UI Symbol"',
      ].join(','),
   },
   [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      fontFamily: ['Raleway', 'Roboto', '"Helvetica Neue"', 'Arial'].join(','),
   },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
   '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
   },

   '&:last-child td, &:last-child th': {
      border: 0,
   },
}));

export default function HistoryDetails() {
   const [historyDetails, sethistoryDetails] = useState<any>();
   useEffect(() => {
      getHistory().then((res) => {
         if (res) {
            sethistoryDetails(res.data);
         }
      });
   }, []);
   return (
      <div className="historymain-div">
         <TableContainer component={Paper}>
            <Table sx={{ minWidth: '100% ' }} aria-label="customized table">
               <TableHead>
                  <TableRow>
                     <StyledTableCell>Date </StyledTableCell>

                     <StyledTableCell align="right">
                        Meeting room
                     </StyledTableCell>
                     <StyledTableCell align="right">
                        Scheduled-Time&nbsp;
                     </StyledTableCell>

                     <StyledTableCell align="right">
                        Total Hours&nbsp;
                     </StyledTableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {historyDetails?.roombooked?.map((ele: any) => (
                     <StyledTableRow>
                        <StyledTableCell component="th" scope="row">
                           {ele.date}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                           {ele?.roomNo}
                        </StyledTableCell>

                        <StyledTableCell align="right">
                           {ele?.scheduledTime}
                        </StyledTableCell>

                        <StyledTableCell align="right">
                           {ele?.totalHours}
                        </StyledTableCell>
                     </StyledTableRow>
                  ))}
               </TableBody>
            </Table>
         </TableContainer>
      </div>
   );
}
