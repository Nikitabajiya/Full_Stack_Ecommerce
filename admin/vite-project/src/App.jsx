import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Admin from './Pages/Admin/Admin'
export const backend_url = "http://localhost:4000";
export const currency = "USD";

const App = () => {
return (
<div>
    <Navbar/>
    <Admin/>
</div>
)
}
export default App