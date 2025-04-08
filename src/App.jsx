import { useState } from 'react'
import './App.css'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'

function App() {
  const [isLogin, setIsLogin] = useState(false);

 const handelClick=()=>{
  setIsLogin(!isLogin)
 }

  return (
    <>
      <div className='flex items-center justify-center min-h-screen bg-gray-100'>
        {isLogin ? <LoginForm ikram="test"  onClick={handelClick}/> : <RegisterForm onClick={handelClick} />}

      </div>
    </>
  )
}

export default App
