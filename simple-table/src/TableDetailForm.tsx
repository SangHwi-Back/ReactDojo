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
import {TableData} from "./data";
import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {v4 as uuid} from 'uuid';
import {useDispatch} from "react-redux";
import {AppDispatch, createArticle, deleteArticle} from "./store";

export enum FormAs {
    create, read, update
}

interface FormParam {
    type: FormAs
    dataProp: TableData
}

export default function TableDetailForm({type, dataProp}: FormParam) {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const [_data, setData] = useState(dataProp);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target;
        setData((prevData) => ({
            ...prevData, [name]: value
        }));
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (type === FormAs.create) {
            _data.viewCount = '0';
            _data.date = (new Date()).toDateString();
            _data.key = uuid();

            dispatch(createArticle(_data));
        } else if (type === FormAs.update) {
            dispatch(createArticle(_data));
        }
        goToList();
    };

    const goToList = () => {
        navigate('/');
    };

    const editable: boolean = (type === FormAs.create || type === FormAs.update);

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2} maxWidth={'sm'}>
                <Grid size={12}>
                    <FormControl fullWidth={true}>
                        <FormLabel htmlFor={'title'}>{'제목'}</FormLabel>
                        {editable
                            ? <TextField name={'title'} value={_data.title} onChange={handleChange}/>
                            : <Typography component={'h3'}>{_data.title}</Typography>
                        }
                    </FormControl>
                </Grid>

                <Grid size={4}>
                    <FormLabel htmlFor={'author'}>{'글쓴이'}</FormLabel>
                    {editable
                        ? <TextField name={'author'} value={_data.author} onChange={handleChange}/>
                        : <Typography component={'h3'}>{_data.author}</Typography>
                    }
                </Grid>

                <Grid size={4}>
                    <FormLabel htmlFor={'date'}>{'날짜'}</FormLabel>
                    {editable
                        ? <Input name={'date'} value={_data.date} onChange={handleChange}/>
                        : <Typography component={'h3'}>{_data.date}</Typography>
                    }
                </Grid>

                <Grid size={12}>
                    <Stack direction="row" spacing={2}>
                        {_data.tags.map((tagName) => <Chip label={tagName} variant={'outlined'}/>)}
                    </Stack>
                </Grid>

                <Grid size={12} sx={{display: 'contents'}}>
                    <FormLabel htmlFor={'contents'}>내용</FormLabel>
                    {editable
                        ? <TextareaAutosize value={_data.contents}
                                            name={'contents'}
                                            minRows={4}
                                            onChange={handleChange}/>
                        : <Box>{_data.contents}</Box>
                    }
                </Grid>

                <Grid size={8}>
                    <Stack direction={'row'} justifyContent={'space-between'}>
                        {editable
                            ? <Button type={'submit'} variant={'contained'}>작성하기</Button>
                            : <Button onClick={() => {
                                dispatch(deleteArticle(_data.key));
                                goToList();
                            }}>삭제하기</Button>
                        }
                        <Button onClick={goToList}>목록으로</Button>
                    </Stack>
                </Grid>
            </Grid>
        </form>
    )
}