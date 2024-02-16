import { Routes, Route, Link, Outlet } from 'react-router-dom'
import Home from './components/Home'
import Account from './components/Account'
import './App.css'

export default function App() {

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
