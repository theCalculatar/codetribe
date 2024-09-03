import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import { Button, Checkbox, Stack, TextField, Typography, IconButton, Icon } from '@mui/material';
import {Google,FacebookTwoTone} from '@mui/icons-material';
import bg from '../../assets/shopping-mall.jpg'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Register() {
  const [password,setPassword] = useState('')
  const [name,setName] = useState('')
  const [username,setUsername] = useState('')
  const navigate = useNavigate()

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const BASE_URL = 'http://localhost:3000'

  const register = ()=>{
    axios.post(BASE_URL+`/users`,{username,password,name})
      .then(value=>{
        if (value.status==201) {
          localStorage.setItem('isLoggedIn',true) 
          navigate('/')
        }
      })
  }
  useEffect(()=>{
    //init cloud data
    const isLoggedIn = localStorage.getItem('isLoggedIn') !== null
    if(isLoggedIn){
      navigate('/')
    }
},[])

  return (
    <Box display={'flex'} height={700} flexDirection={"column"} justifyContent={'center'} alignItems={'center'} >
      <Box width={'70%'} maxWidth={'md'} display={'flex'} height={450} boxShadow={'0px 0px 15px grey '} overflow={'hidden'}>
        <Box minWidth={350} bgcolor={'white'} height={320} display={'flex'} flexDirection={'column'}  p={8}>
          <TextField 
            label='Name'
            variant='standard'
            type='text'
            value={name}
            onChange={(event)=>setName(event.target.value)} 
            />
          <TextField 
            label='Email or Phone Number'
            variant='standard'
            type='email'
            value={username}
            onChange={(event)=>setUsername(event.target.value)} 
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
            <Link style={{fontSize:14,textDecoration:'none',color:'black' }} to={'/login'}>already a user?</Link>
          </Box>

          <Button
            onClick={register}
            sx={{fontSize:16,fontWeight:600,bgcolor:'#00796b',color:'white',borderRadius:5,mt:3}}  
            >
              Register
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

export default Register