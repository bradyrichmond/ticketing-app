import { Box, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const Success = () => {
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000)
    }, [])

    const backToTicketList = () => {
        navigate('/');
    }

    return (
        <Box padding='2rem'>
            {isLoading ? 
                <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
                    <CircularProgress />
                </Box>
                :
                <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
                    <Typography variant='h1' style={{ marginBottom: '2rem' }}>Thanks for your purchase!</Typography>
                    <Typography variant='h6' onClick={backToTicketList}>Back to Ticket List</Typography>
                </Box>
            }
        </Box>
    )
}

export default Success;