import { Box, Button, Typography } from "@mui/material";
import { useParams, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { USDollar } from "../../utils/formatters";
import TicketList from "./TicketList";
import Counter from "../../Components/Counter";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { setCurrentEventId, setEventTicketCount } from "../Cart/CartSlice";

const Event = () => {
    const { id } = useParams();
    const events = TicketList;
    const currentEvent = events.find((e) => e.id === id);
    const [ticketCount, setTicketCount] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleCounterChange = (count) => {
        setTicketCount(count);
    }

    const addToCart = async () => {
        dispatch(setCurrentEventId(id));
        dispatch(setEventTicketCount(ticketCount));
        navigate('/cart');
    }

    return (
        <Box>
            <Box display='flex' justifyContent='center' alignItems='center' marginBottom='2rem'>
                <Typography variant='h2'>{currentEvent.title}</Typography>
            </Box>
            <Box border='1px solid rgb(236, 236, 236)' padding='2rem' display='flex' flexDirection='row'>
                <Box maxWidth='30%'>
                    <Box marginBottom='2rem'>
                        <Typography variant='h4'>{format(currentEvent.datetime, "eee MMM do yyyy")}</Typography>
                        <Typography variant='h5'>{format(currentEvent.datetime, "hh:mm aaa")}</Typography>
                    </Box>
                    <Box marginBottom='2rem'>
                        <Typography variant='h4'>{currentEvent.location}</Typography>
                    </Box>
                    <Box marginBottom='2rem'>
                        <Typography variant='h4'>{USDollar.format(currentEvent.ticketPrice)}</Typography>
                    </Box>
                </Box>
                <Box flex='1' display='flex' flexDirection='column' marginLeft='2rem'>
                    <Box borderBottom='1px solid rgb(236, 236, 236)' padding='1rem'>
                        <Typography variant='h3'>Select Tickets</Typography>
                    </Box>
                    <Box display='flex' flexDirection='row' borderBottom='1px solid rgb(236, 236, 236)' padding='1rem' paddingLeft='2rem'>
                        <Box display='flex' flexDirection='column' flex='1'>
                            <Typography variant='h5'>General Admission</Typography>
                            <Typography variant='h6'>{USDollar.format(currentEvent.ticketPrice)}</Typography>
                        </Box>
                        <Box display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
                            <Counter handleChange={handleCounterChange} />
                        </Box>
                    </Box>
                    <Box borderBottom='1px solid rgb(236, 236, 236)' padding='1rem'>
                        <Typography variant='h3'>Delivery Method</Typography>
                    </Box>
                    <Box display='flex' flexDirection='row' borderBottom='1px solid rgb(236, 236, 236)' padding='1rem' paddingLeft='2rem'>
                        <Box display='flex' flexDirection='column' flex='1'>
                            <Typography variant='h5'>Email Delivery</Typography>
                        </Box>
                    </Box>
                    <Box display='flex' flexDirection='row' justifyContent='flex-end' padding='2rem'>
                        {ticketCount > 0 && <Button variant='contained' onClick={addToCart}>Add to Cart</Button>}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Event;