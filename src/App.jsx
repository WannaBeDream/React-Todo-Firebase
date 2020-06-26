import React, { useEffect, useMemo, useReducer } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import DataContext from "./contexts/data";
import { reducer, initialState, actions } from "./store";
import AppDrawer from "./components/AppDrawer";
import AppContent from "./components/AppContent";
import TodoList from "./pages/TodoList";
import Login from "./pages/Login";
import "./App.scss";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  useEffect(() => {
    actions.getLists(dispatch);
    actions.setAuth(dispatch);
  }, []);

  if (!state.user) return <Login />;

  return (
    <DataContext.Provider value={contextValue}>
      <div className="app">
        <AppDrawer lists={state.lists} />

        <AppContent>
          <Switch>
            <Route exact path="/" component={TodoList} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/important" render={TodoList} />
            <Route exact path="/planned" component={TodoList} />
            <Route path="/:listId/:todoId?" component={TodoList} />
          </Switch>
        </AppContent>
      </div>
    </DataContext.Provider>
  );
}
