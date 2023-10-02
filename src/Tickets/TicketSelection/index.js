import { Box, Typography } from "@mui/material";
import TicketList from './TicketList';
import TicketItem from "./TicketItem";

const TicketSelection = () => {
    return (
        <Box>
            <Typography variant='h1' style={{marginBottom: '2rem'}}>Upcoming Events</Typography>
            {TicketList.map((t) => <TicketItem key={t.id} id={t.id} title={t.title} datetime={t.datetime} location={t.location} />)}
        </Box>
    )
}

export default TicketSelection;