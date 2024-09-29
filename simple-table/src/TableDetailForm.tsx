import Grid from "@mui/material/Grid2";
import {Box, Button, Chip, FormLabel, Input, Stack, TextareaAutosize, Typography} from "@mui/material";
import {TableData} from "./data";
import {useNavigate} from "react-router-dom";
import React, {useState} from "react";

export default function TableDetailForm({editable, data}: {editable: boolean, data: TableData}) {
  const navigate = useNavigate(),
    [title, setTitle] = useState(data.title),
    [author, setAuthor] = useState(data.author),
    [date, setDate] = useState(data.date),
    [contents, setContents] = useState(data.contents);
  
  return (
    <Grid container spacing={2} maxWidth={'sm'}>
      <Grid size={12}>
        <FormLabel htmlFor={'title'}>{'제목'}</FormLabel>
        { editable
          ? <Input value={title} onChange={(e) => setTitle(e.target.value)} />
          : <Typography component={'h3'} >{title}</Typography>
        }
      </Grid>
      
      <Grid size={4}>
        <FormLabel htmlFor={'author'}>{'글쓴이'}</FormLabel>
        { editable
          ? <Input name={'author'} value={author} onChange={(e) => setAuthor(e.target.value)} />
          : <Typography component={'h3'} >{author}</Typography>
        }
      </Grid>
      
      <Grid size={4}>
        <FormLabel htmlFor={'date'}>{'날짜'}</FormLabel>
        { editable
          ? <Input name={'date'} value={date} onChange={(e) => setDate(e.target.value)} />
          : <Typography component={'h3'} >{date}</Typography>
        }
      </Grid>
      
      <Grid size={12}>
        <Stack direction="row" spacing={2}>
          {data.tags.map((tagName)=><Chip label={tagName} variant={'outlined'}/>)}
        </Stack>
      </Grid>
      
      <Grid size={12} sx={{display: 'contents'}}>
        <FormLabel htmlFor={'contents'}>내용</FormLabel>
        { editable
          ? <TextareaAutosize value={contents}
                              minRows={4}
                              onChange={(e) => setContents(e.target.value)}/>
          : <Box><p>{contents}</p></Box>
        }
      </Grid>
      
      <Grid size={12}>
        { editable
          ? <Stack direction={'row'} justifyContent={'space-between'}>
            <Button variant={'contained'} onClick={() => { navigate('/'); }}>작성하기</Button>
            <Button onClick={() => { navigate('/'); }}>목록으로</Button>
            </Stack>
          : <Button onClick={() => { navigate('/'); }}>목록으로</Button>
        }
      </Grid>
    </Grid>
  )
}