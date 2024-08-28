import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { Button, Checkbox, Stack, TextField, Typography, IconButton, Icon } from '@mui/material';
import {Google,FacebookTwoTone} from '@mui/icons-material';
import bg from '../../assets/shopping-mall.jpg'

function Login() {
  const [password,setPassword] = useState('')
  const [email,setEmail] = useState('')
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const login = ()=>{

  }

  return (
    <Box display={'flex'} height={700} flexDirection={"column"} justifyContent={'center'} alignItems={'center'} >
      <Box width={'70%'} display={'flex'} height={400} boxShadow={'0px 0px 15px grey '} overflow={'hidden'}>
        <Box minWidth={350} bgcolor={'white'} height={300} display={'flex'} flexDirection={'column'}  p={8}>
          <TextField 
            label='Email or Phone Number'
            variant='standard'
            type='email'
            value={email}
            onChange={(event)=>setEmail(event.target.value)} 
            />
          <TextField
            id="password"
            label="Password"
            variant='standard'
            type='password'
            value={password}
            onChange={(event)=>setPassword(event.target.value)}
          />
          <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
            <Stack direction={'row'} alignItems={'center'}>
              <Checkbox {...label} sx={{ml:-1.4}} />
              <Typography fontSize={14}>remember me</Typography>
            </Stack>
            <Typography variant="body1" fontSize={14} color="">Forgot Password</Typography>
          </Box>

          <Button
            onClick={login}
            sx={{fontSize:16,fontWeight:600,bgcolor:'#00796b',color:'white',borderRadius:5,mt:3}}  
            >
              log in
          </Button>
          <Typography textAlign={'center'} mt={3} fontSize={14}>Log in with</Typography>
          <Box sx={{display:'flex',justifyContent:'center'}} >
            <IconButton 
              aria-label=""
              onClick={{}}>
              <Icon><Google/></Icon>
            </IconButton>
            <IconButton 
              aria-label="" 
              onClick={{}}>
              <Icon><FacebookTwoTone/></Icon>
            </IconButton>
          </Box>

        </Box>
        <img src={bg} width={'100%'} height={'100%'}/>
      </Box>
     </Box>
  )
}

export default Login