import {data, TableData, defaultData} from "./data";
import {useLocation, useNavigate} from "react-router-dom";
import {TextareaAutosize, Button, FormLabel, Stack, Input} from "@mui/material";
import Grid from '@mui/material/Grid2';

function getData(dataKey: string): TableData {
  return data.list.find((item: TableData) => {
    return item.key === dataKey
  }) || defaultData;
}

function parseQueryString(queryString: string): Record<string, string> {
  const query: Record<string, string> = {};
  const pairs = queryString.slice(1).split("&");
  
  for (const pair of pairs) {
    const [key, value] = pair.split("=");
    if (key && value) {
      query[key] = decodeURIComponent(value);
    }
  }
  
  return query;
}

export default function TableDetail() {
  const dataKey = parseQueryString(useLocation().search).dataKey;
  console.log(useLocation().search);
  const navigate = useNavigate();
  const data = getData(dataKey);
  
  return (
    <Grid container spacing={2}>
      <Grid size={12}>
        <Stack direction="row" spacing={2}>
          <FormLabel htmlFor={'title'}>제목</FormLabel>
          <Input name={'title'} value={data.title}/>
        </Stack>
      </Grid>
      
      <Grid size={4}>
        <FormLabel htmlFor={'author'}>글쓴이</FormLabel>
        <Input name={'author'} value={data.author}/>
      </Grid>
      
      <Grid size={4}>
        <FormLabel htmlFor={'date'}>날짜</FormLabel>
        <Input name={'date'} value={data.date}/>
      </Grid>
      
      <Grid size={12}>
        <Stack direction="row" spacing={2}>
          {data.tags.map((tagName)=><Button>{tagName}</Button>)}
        </Stack>
      </Grid>
      
      <Grid size={12}>
        <FormLabel htmlFor={'contents'}>내용</FormLabel>
        <TextareaAutosize value={data.contents}/>
      </Grid>
      
      <Grid size={12}>
        <Button onClick={() => {
          navigate('/');
        }}>목록으로</Button>
      </Grid>
    </Grid>
  )
}