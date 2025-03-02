import { TextField, Button, Box } from "@mui/material";

export const ItemForm = () => {
  return (
    <>
      <TextField label="Name" fullWidth margin="dense" onChange={() => {}} />

      <TextField
        label="Amount"
        type="number"
        fullWidth
        margin="dense"
        onChange={() => {}}
      />

      <TextField
        label="Price"
        type="number"
        fullWidth
        margin="dense"
        onChange={() => {}}
      />

      <Box sx={{ textAlign: "right", mt: 2 }}>
        <Button variant="contained" onClick={() => {}}>
          Add item
        </Button>
      </Box>
    </>
  );
};
