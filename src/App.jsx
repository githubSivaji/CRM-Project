import Login from "./Pages/Login"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </>
  )
}

export default App
