import { Box, Button, TextField, Typography } from "@mui/material";

const App = () => {
  return (
    <>
      <Box>
        <Button variant="primary">
          <Typography variant="button3">Button</Typography>  
        </Button>
        <Typography variant="button3">Button</Typography>  
        <Button variant="secondary">Button</Button>
        <Button variant="tertiary">Button</Button>
        <TextField variant="outlined" placeholder="hola"> </TextField>
      </Box>
    </>
  );
};

export default App;