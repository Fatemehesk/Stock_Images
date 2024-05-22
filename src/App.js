import {  useMemo, useContext, useEffect } from "react";
import { Context } from "./context/FirestoreContext"
import { useAuthContext } from "./context/AuthContext"
import List from "./components/List"
import "./App.css";


function App() {
  const { state, read } = useContext(Context)
  const { authenticate } = useAuthContext()
  const count = useMemo(() => {
    return `Explore  ${state.items.length} image${state.items.length > 1 ? 's': ''}`
  }, [state.items])

  useEffect(() => {
    read()
    authenticate()
  }, []);

  return (
    <div className="main container mt-5">
    <h1 className="text-center mb-4">IMAGE SHOWCASE</h1>
    <p className="text-center text-muted fs-5 ">{count}</p>
    <List items={state.items} />
  </div>
  );
 
}
export default App;
