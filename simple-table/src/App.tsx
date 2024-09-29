import React, {ReactNode, useState} from 'react';
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
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import data, {TableData} from "./data";

enum FilterType {
  number, viewCount
}

type TableDataRow = TableData & {
  number: number;
}

function getListData(type: FilterType = FilterType.number) {
  let result = data.list.map((item, index): TableDataRow => (
      {...item, number: index + 1}
  ));

  result.sort((lh, rh) => {
    switch (type) {
      case FilterType.number:
        return lh.number - rh.number;
      case FilterType.viewCount:
        return parseInt(lh.viewCount, 10) - parseInt(rh.viewCount, 10);
    }
  });

  return result;
}

function App() {
  const [filterType, setFilterType] = useState(FilterType.number);
  let isNumber = filterType === FilterType.number;

  function getFilterIcon(isNumber: boolean): ReactNode {
    return isNumber ? <FormatListNumberedIcon /> : <FilterListIcon/>
  }

  function getFilterButton() {
    return <IconButton onClick={() => {
      setFilterType((isNumber ? FilterType.viewCount : FilterType.number));
    }}>
      {getFilterIcon(isNumber)}
    </IconButton>;
  }

  return (
    <Container maxWidth={'sm'}>
      <Box>
        <Stack direction="row" justifyContent={'space-between'}>
          {getFilterButton()}
          <IconButton onClick={() => {}} color={'primary'}>
            <CreateIcon/>
          </IconButton>
        </Stack>
      </Box>
      <Box>
        <TableContainer>
          <Table>
            <TableHead>
              {['', '제목', '글쓴이', '날짜', '조회수'].map((name) => <TableCell>{name}</TableCell>)}
            </TableHead>
            <TableBody>
              {getListData(filterType).map((item) => (
                  <TableRow key={item.key}>
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
