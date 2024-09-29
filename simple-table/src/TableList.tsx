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
import {data, TableData} from "./data";
import {useNavigate} from "react-router-dom";
enum FilterType { number, viewCount }
type TableDataRow = TableData & { number: number; }

export default function TableList() {
  const [filterType, setFilterType] = useState(FilterType.number);

  return (
    <Container maxWidth={'sm'}>
      <TableActionBar filterType={filterType} setFilterType={setFilterType}/>
      <Box>
        <TableContainer>
          <Table>
            <ContainerHead/>
            <ContainerContents filterType={filterType}/>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}

function getListData(type: FilterType = FilterType.number) {
  let result = data.list.map((item, index): TableDataRow => (
    {...item, number: index + 1}
  ));

  result.sort((lh, rh) => {
    if (type === FilterType.number) {
      return lh.number - rh.number;
    } else {
      return parseInt(lh.viewCount, 10) - parseInt(rh.viewCount, 10);
    }
  });

  return result;
}

function TableActionBar({filterType, setFilterType}: {
  filterType: FilterType,
  setFilterType: React.Dispatch<React.SetStateAction<FilterType>>
}) {
  const isNumber = filterType === FilterType.number;
  const nextFilterTYpe = isNumber ? FilterType.viewCount : FilterType.number;

  function getFilterButton() {
    return <IconButton onClick={() => setFilterType(nextFilterTYpe)}>
      {getFilterIcon(isNumber)}
    </IconButton>;
  }

  function getFilterIcon(isNumber: boolean): ReactNode {
    return isNumber ? <FormatListNumberedIcon/> : <FilterListIcon/>
  }

  return <Box>
    <Stack direction="row" justifyContent={'space-between'}>
      {getFilterButton()}
      <IconButton onClick={() => {
      }} color={'primary'}>
        <CreateIcon/>
      </IconButton>
    </Stack>
  </Box>
}

function ContainerHead() {
  return <TableHead>
    {['', '제목', '글쓴이', '날짜', '조회수'].map((name) => <TableCell key={name}>{name}</TableCell>)}
  </TableHead>
}

function ContainerContents({filterType}: {filterType: FilterType}) {
  const navigate = useNavigate();
  function navigateTo(key: string) {
    navigate(`/detail?dataKey=${key}`);
  }
  
  return <TableBody>
    {getListData(filterType).map((item) => (
      <TableRow key={item.key} hover>
        <TableCell component={'th'}
                   scope={'row'}
                   align={'right'}>
          {item.number}
        </TableCell>
        <TableCell align={'left'}
                   onClick={() => navigateTo(item.key)}
                
        >{item.title}</TableCell>
        <TableCell align={'left'}>{item.author}</TableCell>
        <TableCell align={'right'}>{item.date}</TableCell>
        <TableCell align={'right'}>{item.viewCount}</TableCell>
      </TableRow>
    ))}
  </TableBody>;
}