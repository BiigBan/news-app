import { Pagination, Stack } from '@mui/material'
import { Box } from '@mui/system';
import React, { useEffect, useMemo, useRef, useState } from 'react'

export default function Paginator({ setCurrentPage, allArticles }) {

    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(Math.floor(allArticles / 6))
    }, [])

    const pageClicked = (e) => {
        setCurrentPage(e.target.textContent)
    }

    return (
        <Box sx={{display: 'flex', justifyContent: 'center', margin: '20px 0 20px 0'}}>
            <Stack spacing={2}>
                <Pagination onClick={pageClicked} count={count} />
            </Stack>
        </Box>
    )

}
