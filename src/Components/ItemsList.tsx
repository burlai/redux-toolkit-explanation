import { List, ListItem, ListItemText, IconButton, Paper } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export const ItemsList = () => {
  const itemsDummyData = [
    { name: "Item 1", amount: 2, price: 3.5 },
    { name: "Item 2", amount: 1, price: 1.5 },
    { name: "Item 3", amount: 3, price: 2.5 },
  ];
  return (
    <List>
      {itemsDummyData.map((item, index) => (
        <ListItem
          key={index}
          sx={{ p: 0 }}
          secondaryAction={
            <IconButton onClick={() => {}} color="error">
              <DeleteIcon />
            </IconButton>
          }
        >
          <Paper sx={{ mb: 1, px: 2, py: 1, width: "100%" }} elevation={6}>
            <ListItemText
              primary={item.name}
              secondary={`Amount: ${item.amount} | Price: $${item.price.toFixed(
                2
              )}`}
            />
          </Paper>
        </ListItem>
      ))}
    </List>
  );
};
