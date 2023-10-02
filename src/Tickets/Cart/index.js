import { Box, Button, FormControlLabel, Radio, Typography } from "@mui/material";
import { selectCurrentEventId, selectTicketCount } from "./CartSlice";
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import TicketList from "../TicketSelection/TicketList";
import { USDollar } from "../../utils/formatters";

const Cart = () => {
    const ticketCount = useSelector(selectTicketCount);
    const eventId = useSelector(selectCurrentEventId);
    const [eventData, setEventData] = useState();
    const navigate = useNavigate()

    useEffect(() => {
        const event = TicketList.find((t) => t.id === eventId);
        setEventData(event);
    }, [eventId])

    const placeOrder = () => {
        navigate('/success')
    }

    return (
        <Box display='flex' flexDirection='row' margin='1rem'>
            <Box flex='1' display='flex' flexDirection='column'>
                <Box border='1px solid rgb(236, 236, 236)' marginBottom='1rem' padding='1rem'>
                    <Typography variant='h4'>Delivery</Typography>
                    <Typography variant='h5'>Email Delivery - Free</Typography>
                </Box>
                <Box border='1px solid rgb(236, 236, 236)' padding='1rem'>
                    <Typography variant='h4'>Payment</Typography>
                    <Typography variant='h5'>Use Credit / Debit Card</Typography>
                    <Box display='flex' flexDirection='row'>
                        <FormControlLabel control={<Radio />} checked={true}/>
                        <Box display='flex' flexDirection='column'>
                            <Typography variant='h5'>VISA - 9999</Typography>
                            <Typography variant='h6'>User Name | Exp. 10/27</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            {eventData &&
                <Box flex='1' border='1px solid rgb(236, 236, 236)' marginLeft='1rem' display='flex' flexDirection='column' padding='1rem'>
                    <Typography variant='h3'>Total: {USDollar.format(eventData.ticketPrice * ticketCount)}</Typography>
                    <Typography variant='h4'>Tickets</Typography>
                    <Typography variant='h5'>{USDollar.format(eventData.ticketPrice)} x {ticketCount}</Typography>
                    <Box flex='1' flexDirection='row' display='flex' justifyContent='flex-end' marginTop='2rem'>
                        <Button fullWidth variant='contained' onClick={placeOrder}>Place Order</Button>
                    </Box>
                </Box>
            }
        </Box>
    )
}

export default Cart;