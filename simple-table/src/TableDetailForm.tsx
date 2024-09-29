import Grid from "@mui/material/Grid2";
import {
  Box,
  Button,
  Chip,
  FormControl,
  FormLabel,
  Input,
  Stack,
  TextareaAutosize,
  TextField,
  Typography
} from "@mui/material";
import {data, TableData} from "./data";
import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import { v4 as uuid } from 'uuid';

export default function TableDetailForm({editable, dataProp}: {editable: boolean, dataProp: TableData}) {
  const navigate = useNavigate();
  const [_data, setData] = useState(dataProp);
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData, [name]: value
    }));
  }
  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    _data.viewCount = '0';
    _data.date = (new Date()).toDateString();
    _data.key = uuid();
    data.list.splice(0, 0, _data);
    navigate('/');
  };
  
  return (
    <form onSubmit={handleSubmit}>
    <Grid container spacing={2} maxWidth={'sm'}>
      <Grid size={12}>
        <FormControl fullWidth={true}>
          <FormLabel htmlFor={'title'}>{'제목'}</FormLabel>
          { editable
            ? <TextField name={'title'} value={_data.title} onChange={handleChange} />
            : <Typography component={'h3'} >{_data.title}</Typography>
          }
        </FormControl>
      </Grid>
      
      <Grid size={4}>
        <FormLabel htmlFor={'author'}>{'글쓴이'}</FormLabel>
        { editable
          ? <TextField name={'author'} value={_data.author} onChange={handleChange} />
          : <Typography component={'h3'} >{_data.author}</Typography>
        }
      </Grid>
      
      <Grid size={4}>
        <FormLabel htmlFor={'date'}>{'날짜'}</FormLabel>
        { editable
          ? <Input name={'date'} value={_data.date} onChange={handleChange} />
          : <Typography component={'h3'} >{_data.date}</Typography>
        }
      </Grid>
      
      <Grid size={12}>
        <Stack direction="row" spacing={2}>
          {_data.tags.map((tagName)=><Chip label={tagName} variant={'outlined'}/>)}
        </Stack>
      </Grid>
      
      <Grid size={12} sx={{display: 'contents'}}>
        <FormLabel htmlFor={'contents'}>내용</FormLabel>
        { editable
          ? <TextareaAutosize value={_data.contents}
                              name={'contents'}
                              minRows={4}
                              onChange={handleChange}/>
          : <Box>{_data.contents}</Box>
        }
      </Grid>
      
      <Grid size={12}>
        { editable
          ? <Stack direction={'row'} justifyContent={'space-between'}>
            <Button type={'submit'} variant={'contained'}>작성하기</Button>
            <Button onClick={() => { navigate('/'); }}>목록으로</Button>
            </Stack>
          : <Button onClick={() => { navigate('/'); }}>목록으로</Button>
        }
      </Grid>
    </Grid>
    </form>
  )
}