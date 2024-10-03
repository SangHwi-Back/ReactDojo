import React, {useState} from 'react';
import './App.css';
import {Box, Button, Container, Divider, Stack, TextField} from "@mui/material";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import {savePasswordHistory, useValidatePassword} from "./store";
import {useDispatch} from "react-redux";

function App() {
  const [password, setPassword] = useState('');
  const enablePassword = useValidatePassword();
  const dispatch = useDispatch();
  
  const handleOnClick = () => {
    dispatch(savePasswordHistory(password));
  };
  
  return (
    <Container sx={{maxWidth: "sx", maxHeight: "md"}}>
      <Box sx={{flexGrow: 1, borderRadius: 2}}>
        
        <Stack direction="row" justifyContent={'space-between'}>
          <AssignmentIndIcon fontSize="medium"/>
          <Box/>
        </Stack>
        
        <Divider/>
        
        <Box>
          <TextField
            label={enablePassword ? "맞아요!" : "틀려요!"}
            fullWidth
            variant="outlined"
            error={!enablePassword}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </Box>
        
        <Divider/>
        
        <Box>
          <Button onClick={handleOnClick}>로그인 잇힝</Button>
        </Box>
      </Box>
    </Container>
  );
}

export default App;
