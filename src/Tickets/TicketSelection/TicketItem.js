import { Box, Button, Typography } from '@mui/material';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

const TicketItem = ({ id, datetime, title, location }) => {
    const navigate = useNavigate();

    const seeTickets = () => {
        navigate(`/event/${id}`);
    }

    return (
        <Box display='flex' flexDirection='row' border='1px solid rgb(236, 236, 236)' marginBottom='1rem'>
            <Box display='flex' flexDirection='column' padding='1rem'>
                <Typography variant='h5'>{format(datetime, 'MMM d')}</Typography>
                <Typography variant='h6'>{format(datetime, 'EEE h:mm')}</Typography>
            </Box>
            <Box flex='1' display='flex' flexDirection='column' padding='1rem'>
                <Typography variant='h5'>{title}</Typography>
                <Typography variant='h6'>{location}</Typography>
            </Box>
            <Box padding='1rem' display='flex' justifyContent='center' alignItems='center'>
                <Button variant='contained' onClick={seeTickets}>See Tickets</Button>
            </Box>
        </Box>
    )
}

export default TicketItem;