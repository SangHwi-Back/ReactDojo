import React, {ReactNode, useState} from 'react';
import './App.css';
import {
  Box,
  Container,
  IconButton,
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
import AddIcon from '@mui/icons-material/Add';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import {TableData} from "./data";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "./store";

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

function numberingListData(list: TableData[]): TableDataRow[] {
  return list.map((item, index): TableDataRow => (
      {...item, number: index + 1}
  ));
}

function sortListData(result: TableDataRow[], type: FilterType): TableDataRow[] {
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
  const navigate = useNavigate();

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
      <IconButton onClick={() => { navigate('/create') }} color={'primary'}>
        <AddIcon/>
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

  let list: TableData[] = useSelector((state: RootState) => state.data.list);
  const rows: TableDataRow[] = sortListData(numberingListData(list), filterType);

  const goEdit = (key: string) => {
    navigate(`/edit?dataKey=${key}`);
  }
  const goDetail = (key: string) => {
    navigate(`/detail?dataKey=${key}`);
  }
  
  return <TableBody>
    {rows.map((item) => (
      <TableRow key={item.key} onClick={() => goDetail(item.key)} hover>
        <TableCell component={'th'} scope={'row'} align={'right'}>
          {item.number}
        </TableCell>
        <TableCell align={'left'}>{item.title}</TableCell>
        <TableCell align={'left'}>{item.author}</TableCell>
        <TableCell align={'right'}>{item.date}</TableCell>
        <TableCell align={'right'}>{item.viewCount}</TableCell>
        <TableCell align={'center'}>
          <IconButton onClick={(event) => {
            event.stopPropagation();
            event.preventDefault();
            goEdit(item.key)
          }} color={'primary'}><CreateIcon/></IconButton>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>;
}