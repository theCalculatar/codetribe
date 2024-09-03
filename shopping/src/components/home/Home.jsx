import { AddCircle } from '@mui/icons-material'
import { Box, Container, Fab, FormControl, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItem} from '../../store/shoppingSlice'
import axios from 'axios'
import { TableFill } from './TableFill'
import { useNavigate } from 'react-router-dom'



function Home({input}) {
    const shoppingItems = useSelector((state) => state.shopping.filter((value) => {
        //if no input the return the original
        if(input==''){
            return value
        }else{
            return value.name.toString().toLowerCase().includes(input)
        }
        }))
    const dispatch = useDispatch()
    const navigate = useNavigate()
    //
    const [name,setName] = useState('')
    const [tag,setTag] = useState('')
    const [notes,setNotes] = useState('')
    const [quantity,setQuantity] = useState(0)
    useEffect(()=>{
    })
    //



    useEffect(()=>{
        //init cloud data
        const isLoggedIn = localStorage.getItem('isLoggedIn') == 'true'
        if(!isLoggedIn){
          navigate('/login')
        }
    },[])
    //Form control functions
    const nullStates = (name===''||tag===''||notes==='')
    const setNullStates = () =>{
        setName('')
        setNotes('')
        setQuantity(0)
    }
    const isNull = (value) => {
        return value.toString().trim == ''
    }

    const addShoppingItem = () =>{
        if(isNull(name)||isNull(tag)){
            return
        }
        axios.post(BASE_URL+'/list',{name, quantity, notes, tag})
        dispatch(addItem({name, quantity, notes, tag}))
        setNullStates()
    }

    const fabStyle = {
        position: 'absolute',
        bottom: '16%',
        right: '16%',
    }

    const fab = {
          color: 'primary',
          sx: fabStyle,
          icon: <AddCircle />,
          label: 'Add',
    }

  return (
    <Box display={'flex'} justifyContent={'center'} flexDirection={'column'} >
        <Container maxWidth='md' >
            <Box gap={2} display={'flex'} mt={4} bgcolor={"lightGrey"} p={2}>
                <TextField
                    id="name"
                    label="Name"
                    value={name}
                    onChange={(event)=>setName(event.target.value)}
                    />
                <TextField
                id=""
                label="quantity"
                value={quantity}
                type='number'
                onChange={(event)=>setQuantity(event.target.value)}
                />
                <FormControl sx={{minWidth:100}} >
                    <InputLabel id="demo-simple-select-label">Tag</InputLabel>
                    <Select
                        value={tag}
                        variant='outlined'
                        onChange={(event)=>setTag(event.target.value)}
                        >
                            <MenuItem value={'shoes'}>shoes</MenuItem>
                            <MenuItem value={'vegetables'}>vegetables</MenuItem>
                            <MenuItem value={'jackets'}>Jackets</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                id="nates"
                label="Notes"
                value={notes}
                onChange={(event)=>setNotes(event.target.value)}
                />
            </Box>
            <Box>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 550}} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Tag</TableCell>
                            <TableCell align="right">Notes</TableCell>
                            <TableCell align="center">Quantity</TableCell>
                            <TableCell align="center">del</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                shoppingItems.map((row,index) =>
                                    <TableFill key={index} row={row}/>
                                )
                            }
                        </TableBody>
                </Table>
            </TableContainer>     
            </Box>      
        </Container>
        {!nullStates&&<Fab onClick={addShoppingItem} sx={fab.sx} aria-label={fab.label} color={fab.color}>
            {fab.icon}
          </Fab>}
    </Box>
  )
}

export default Home