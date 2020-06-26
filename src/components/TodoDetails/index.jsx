import React from "react";
import "./index.scss";
import {
  Typography,
  Layout,
  Icon,
  IconButton,
  TextField,
  Checkbox,
  List,
  ListItem,
  ListItemText,
} from "mdc-react";

const TodoDetails = ({ todo, onClose }) => {
  return (
    <aside className="todo-details">
      <Layout row justifyContent="between">
        <Typography>Детали задачи</Typography>
        <IconButton onClick={onClose}>
          <Icon>close</Icon>
        </IconButton>
      </Layout>

      <Layout>
        <Layout row>
          <Checkbox checked={todo.completed} onChange={() => {}} />

          <TextField fullWidth value={todo.title} onChange={() => {}} />
        </Layout>
        {todo.steps && todo.steps.length > 0 && (
          <List>
            {todo.steps.map((step, index) => (
              <listItem key={index}>
                <ListItemText>{step}</ListItemText>
              </listItem>
            ))}
          </List>
        )}
      </Layout>
    </aside>
  );
};

export default TodoDetails;
