import React from "react";
import "./todos.css";
import PartyPic from "../assets/keithParty.png";
import { Card, CardContent, Grid, CardActionArea, ListItemText, Button, CardMedia, Typography} from "@mui/material";

// 1. This component formats and returns the list of todos.
// 2. Treat the question mark like an if statement.
// If the todos array has items in the list [todos.length], we want to return the list
// Else, return a message saying "You have no todo's left"
// 3. The map function is called to assign each array item with a key
// 4. Think of lines 14-23 as a loop. For each todo in the todo list, we want to give the list item
// a key, and it's own card shown in the UI
const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <Card variant="outlined" sx={{ width: 1/4, maxWidth: 400, padding: 0 }}>
            <CardActionArea>
              <CardContent style={{ padding: "16px" }}>
                  <Typography style={{ fontFamily: "Montserrat"}}>
                    {todo.content}
                  </Typography>
                  <Typography style={{ fontFamily: "Montserrat"}}>
                    {todo.date}
                  </Typography>
                </CardContent>
              <Button variant="outlined" size="small" color="success" sx= {{ marginBottom: "10px" }} onClick={() => deleteTodo(todo.id)}>Done</Button>
            </CardActionArea>
        </Card>
      );
    })
  ) : (
    <Card variant="outlined" sx={{ maxWidth: 400 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={ PartyPic }
          />
          <CardContent style={{ padding: "16px" }}>
            <Typography style={{ fontFamily: "Montserrat"}}>
              Congrats!
              You've Completed Everything!
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
  );
  // Lastly, return the todoList constant that we created above to show all of the items on the screen.
  return (
    <div className="todoCollection">
      {todoList}
    </div>
  );
};

export default Todos;
