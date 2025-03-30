import { TextField, Button, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { setItemName, setItemAmount, setItemPrice, StoreType } from "../store";

export const ItemForm = () => {
  const dispatch = useDispatch(); // useDispatch is a hook that returns a reference to the dispatch function from the Redux store. You may use it to dispatch actions as needed.

  const itemForm = useSelector((state: StoreType) => state.itemForm); // useSelector is a hook that returns the current value of the store state. It takes a selector function as an argument.

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setItemName(event.target.value)); // we are dispatching the action to set the name of the item
  };

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setItemAmount(
        event.target.value.length > 0 ? Number(event.target.value) : undefined
      )
    ); // we are dispatching the action to set the amount of the item
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setItemPrice(
        event.target.value.length > 0 ? Number(event.target.value) : undefined
      )
    );
  };

  return (
    <>
      <TextField
        label="Name"
        fullWidth
        margin="dense"
        value={itemForm.name}
        onChange={handleNameChange}
      />

      <TextField
        label="Amount"
        type="number"
        fullWidth
        margin="dense"
        value={itemForm.amount}
        onChange={handleAmountChange}
      />

      <TextField
        label="Price"
        type="number"
        fullWidth
        margin="dense"
        value={itemForm.price}
        onChange={handlePriceChange}
      />

      <Box sx={{ textAlign: "right", mt: 2 }}>
        <Button variant="contained" onClick={() => {}}>
          Add item
        </Button>
      </Box>
    </>
  );
};
