
import './App.css'
// import HookFrom from './components/HookFrom/HookFrom'
import ReuseableForm from './components/ReuseableForm/ReuseableForm'
// import RefFrom from './components/refFrom/RefFrom'
// import SimpleFrom from './components/SimpleFrom/SimpleFrom'
// import StateFullForm from './components/stateFullForm/StateFullForm'

function App() {

  const handleSingUpSubmit = data =>{
    console.log('sign up data ', data)
  }
  const handleProfileUpdateSubmit = data =>{
    console.log('update profile data ', data)

  }

  return (
    <>

      <h1>Vite + React</h1>

      {/* <SimpleFrom></SimpleFrom> */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <RefFrom></RefFrom> */}
      {/* <HookFrom></HookFrom> */}
      <ReuseableForm fromTile={'Sign Up'} handelSubmit={handleSingUpSubmit}></ReuseableForm>
      <ReuseableForm fromTile={'Profile Update'} submitBtnText='Update' handelSubmit={handleProfileUpdateSubmit}></ReuseableForm>

    </>
  )
}

export default App
