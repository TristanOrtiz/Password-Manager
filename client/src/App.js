import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NoPage from './pages/NoPage'
import About from './pages/About'
import Contact from './pages/Contact'
import CreateAccount from './pages/CreateAccount'
import UserHomepage from './pages/UserHomepage'


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/createAccount' element={<CreateAccount />} />
          <Route path='/userHomepage' element={<UserHomepage />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}