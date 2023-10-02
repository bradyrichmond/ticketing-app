import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const Counter = ({handleChange}) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (handleChange) {
            handleChange(count);
        }
    }, [count])

    const increaseCount = () => {
        setCount((cur) => cur + 1);
    }

    const decreaseCount = () => {
        setCount((cur) => cur > 0 ? cur - 1 : 0);
    }

    return (
        <Box height='2rem' border='1px solid rgb(236, 236, 236)' borderRadius='1rem' display='flex' flexDirection='row' justifyContent='center' alignItems='center' overflow='hidden'>
            <Box borderRight='1px solid rgb(236, 236, 236)' padding='1rem' onClick={decreaseCount}>-</Box>
            <Box padding='1rem'>
                <Typography>{count}</Typography>
            </Box>
            <Box borderLeft='1px solid rgb(236, 236, 236)' padding='1rem' onClick={increaseCount}>+</Box>
        </Box>
    )
}

export default Counter;