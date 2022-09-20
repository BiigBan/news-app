import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react'
import Filter from './Filter/Filter';

export default function Footer() {

    return (
        <Box sx={{ background: '#F8F8F8', minHeight: '70px', display: 'flex',flexDirection: 'column', alignItems: 'center' }}>
            {/* <Filter/> */}
            <Container>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Box sx={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                "&:hover": {filter: 'drop-shadow(2px 1px 3px rgb(193, 193, 193))'}
                }}>
                        <ExpandLessIcon />
                        <Typography fontWeight='500' fontFamily='Roboto'>Filters</Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
