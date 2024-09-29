import React from 'react';
import './App.css';
import {
  Box,
  Container, IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import FilterListIcon from '@mui/icons-material/FilterList';
import data, {TableData} from "./data";

type TableDataRow = TableData & {
  number: number;
}

function getListData() {
  return data.list.map((item, index): TableDataRow => (
      {...item, number: index + 1}
  ));
}

function App() {
  return (
    <Container maxWidth={'sm'}>
      <Box>
        <Stack direction="row" justifyContent={'space-between'} >
          <IconButton onClick={()=>{}}>
            <FilterListIcon/>
          </IconButton>
          <IconButton onClick={()=>{}}
                      color={'primary'}>
            <CreateIcon/>
          </IconButton>
        </Stack>
      </Box>
      <Box>
        <TableContainer>
          <Table>
            <TableHead>
              {['', '제목', '글쓴이', '날짜', '조회수'].map((name)=><TableCell>{name}</TableCell>)}
            </TableHead>
            <TableBody>
              {getListData().map((item, index) => (
                  <TableRow key={index}>
                    <TableCell component={'th'}
                               scope={'row'}
                               align={'right'}>
                      {item.number}
                    </TableCell>
                    <TableCell align={'left'}>{item.title}</TableCell>
                    <TableCell align={'left'}>{item.author}</TableCell>
                    <TableCell align={'right'}>{item.date}</TableCell>
                    <TableCell align={'right'}>{item.viewCount}</TableCell>
                  </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}

export default App;
