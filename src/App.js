import { Box, Paper } from "@mui/material";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import TicketSelection from "./Tickets/TicketSelection";
import Event from "./Tickets/TicketSelection/Event";
import Cart from "./Tickets/Cart";
import Success from "./Tickets/Cart/Success";

const router = createBrowserRouter([
  {
    path: '/',
    element: <TicketSelection />,
  },
  {
    path: '/event/:id',
    element: <Event />
  },
  {
    path: '/cart',
    element: <Cart />
  },
  {
    path: '/success',
    element: <Success />
  }
]);

function App() {
  return (
    <Box width='100%' height='100%' display='flex' justifyContent='center' alignItems='center' bgcolor='rgb(236,236,236)'>
      <Paper style={{height: '100%', width: '40%'}}>
        <Box margin='2rem'>
          <RouterProvider router={router}/>
        </Box>
      </Paper>
    </Box>
  );
}

export default App;
