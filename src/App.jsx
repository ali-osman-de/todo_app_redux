import { useSelector } from "react-redux"
import Landing from "./pages/Landing.jsx"


function App() {
  const store = useSelector(store => store)
  console.log(store)

  return (
    <>
      <Landing />
    </>
  )
}

export default App
