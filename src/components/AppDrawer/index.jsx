import React, {useContext} from "react";
import {NavLink} from "react-router-dom";
import {
  Drawer,
  DrawerHeader,
  DrawerContent,
  List,
  ListItem,
  ListItemGraphic,
  ListItemText,
  Icon,
  ListGroup,
  ListDivider
} from "mdc-react";
import  DataContext  from "./../../contexts/data";

export default function AppDrawer({ lists }) {
  const { state } = useContext(DataContext)

  return (
    <Drawer id="app-drawer">
      <DrawerHeader title="React todo" subtitle={state.user ? state.user.email : ""}/>
      <DrawerContent>
        <ListGroup>
          <List>
            {[
              { title: "Tasks", icon: "home", to: "/", exact: true },
              { title: "Important", icon: "star", to: "/important" },
              { title: "Planned", icon: "event", to: "/planned" },
            ].map((item) => (
              <ListItem 
              key={item.icon}
              component={NavLink}
              to={item.to}
              exact={item.exact}
              activeClassName="mdc-list-item--activated"
              >
                <ListItemGraphic>
                  <Icon>{item.icon}</Icon>
                </ListItemGraphic>

                <ListItemText>{item.title}</ListItemText>
              </ListItem>
            ))}
          </List>
          <ListDivider element="hr"/>
          <List>
            {lists.map((item) => (
              <ListItem 
              key={item.id}
              component={NavLink}
              to={item.id}
              activeClassName="mdc-list-item--activated"
              >
                <ListItemGraphic>
                  <Icon>list</Icon>
                </ListItemGraphic>

                <ListItemText>{item.title}</ListItemText>
              </ListItem>
            ))}
          </List>
        </ListGroup>
      </DrawerContent>
    </Drawer>
  );
}
