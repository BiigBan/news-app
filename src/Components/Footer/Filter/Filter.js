import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useRef } from 'react'

export default function Filter({ open }) {

  const openRef = useRef(undefined);

  useEffect(() => {
    openRef.current.style.transition = '0.3s';
  }, [])

  useEffect(()=> {
    open ? openRef.current.style.height = '30px' : openRef.current.style.height = '0px';
  }, [open])



  return (
    <Box ref={openRef}  sx={{ display: 'flex', justifyContent: 'space-around', width: '100%', background: '#f0f0f0', boxShadow: "0 1px 3px #f0f0f0", height: '0px', overflow: 'hidden' }}>
      <Typography fontSize='18px' sx={{
        cursor: 'pointer', transition: '0.3s',
        '&:hover': { color: 'rgb(88, 88, 88)' }
      }}>ENGLISH</Typography>
      <Typography fontSize='18px' sx={{
        cursor: 'pointer', transition: '0.3s',
        '&:hover': { color: 'rgb(88, 88, 88)' }
      }}>UKRAINIAN</Typography>
      <Typography fontSize='18px' sx={{
        cursor: 'pointer', transition: '0.3s',
        '&:hover': { color: 'rgb(88, 88, 88)' }
      }}>RUSSIAN</Typography>
    </Box>
  )
}
