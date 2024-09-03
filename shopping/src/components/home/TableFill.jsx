import { FormControl, MenuItem, Select, TableCell, TableRow, TextField, IconButton } from '@mui/material'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { removeItem } from '../../store/shoppingSlice'
import {  Delete } from '@mui/icons-material'
import { useEffect, useRef, useState } from 'react'



export const TableFill = ({row}) => {
    const BASE_URL = 'http://localhost:3000'
    const dispatch = useDispatch()

    const [name,setName] = useState(row.name)

    const [tag,setTag] = useState(row.tag)
    const [notes,setNotes] = useState(row.notes)
    const [quantity,setQuantity] = useState(row.quantity)

    const updateItem = () =>{
        axios.put(BASE_URL+'/list/'+row.id,{name,notes,tag,quantity})
            .then((value)=>{
                if(value.status==200){
                    console.log('successful')
                }
            })
        // dispatch(editItem({id:index,item:{name:event.target.value}}))
    }

    const deleteItem = () =>{
        axios.delete(BASE_URL+'/list/'+row.id)
        dispatch(removeItem(row.name))
    }

    const isNull = (value) => {
        return value.toString().trim == ''
    }

    useEffect(()=>{
        const timer = setTimeout(()=>{
            if(isNull(name)||isNull(tag)){
                return
            }
            updateItem()
        },3000)

        return () =>{
            clearTimeout(timer)
        }

    },[name,tag,notes,quantity])

    return(<TableRow
        key={row.name}
        sx={{ '&:last-child td, &:last-child th': {border: 0}}}
        >
        <TableCell component="th" scope="row">
            <TextField
                multiline
                maxRows={2}
                fullWidth
                defaultValue={name}
                variant='standard'
                onKeyUp={(event)=>setName(event.target.value)}
                InputProps={{ disableUnderline: true }}
            />
        </TableCell>
        <TableCell>
            <FormControl sx={{minWidth:100}} >
                <Select
                    variant='standard'
                    onChange={(event)=>setTag(event.target.value)}
                    value={tag}
                    >
                        <MenuItem value={'shoes'}>shoes</MenuItem>
                        <MenuItem value={'vegetables'}>vegetables</MenuItem>
                        <MenuItem value={'jackets'}>Jackets</MenuItem>
                        <MenuItem value={'fruits'}>Jackets</MenuItem>
                </Select>
            </FormControl>
        </TableCell>
        <TableCell align="center">
            <TextField
                defaultValue={notes}
                fullWidth
                multiline
                maxRows={2}
                variant='standard'
                onKeyUp={(event)=>setNotes(event.target.value)}
                InputProps={{ disableUnderline: true }}            
            />
        </TableCell>
        <TableCell align="right">
            <TextField
                variant='standard'
                InputProps={{ disableUnderline: true }}
                id=""
                type='number'
                onKeyUp={(event)=>setQuantity(event.target.value)}
                defaultValue={quantity}            
            />
        </TableCell>
        <TableCell>
            <IconButton aria-label="" onClick={()=>deleteItem()}>
                <Delete/>
            </IconButton>
        </TableCell>
    </TableRow>)
}