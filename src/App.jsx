import { Routes, Route, Link, Outlet } from 'react-router-dom'
import Home from './components/Home'
import Account from './components/Account'
import './App.css'
import csrf from "../../src/csrf";

export default async function handler(req, res) {
  await csrf(req, res);
  res.status(200).json({ name: "John Doe" });
}


const environment_var = import.meta.env.VITE_API_KEY

export default function App() {

  // console.log(environment_var)

  // placeholder register a new user
  const registerUser = async () => {
    const response = await fetch(`https://garchi.co.uk/api/v2/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${environment_var}`,
      },
      body: JSON.stringify({
        "firstname": "testuser",
        "lastname": "testuser",
        "email": "test@test.com",
        "password": "password",
        "password_confirmation": "password",
        "contact": "1234567890",
        "cannotify": "true"
      })
    })
    const data = await response.json()
    console.log(data)
  }

  registerUser()

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
        <Route path="/Account" element={<Account />} />
        <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </>
  )
}

function Layout() {
  return (
    <>
    <div className='navbar'>
      <h1 className='mainmenuhead'>ReviewFluence</h1>
      <nav>
        <p>
        <Link to="/Home">Home</Link>
        </p>
        <p>
        <Link to="/Account">Account</Link>
        </p>
      </nav>
      </div>
      <div>
      <Outlet className="content"/>
    </div>
    </>
  )
}
