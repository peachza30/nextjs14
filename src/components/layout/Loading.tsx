import { Box } from '@mui/material'
import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';

type Props = {}

const Loading = (props: Props) => {
  return (
    <Box className='flex justify-center items-center h-screen text-blue-600'><CircularProgress /></Box>
  )
}

export default Loading