
import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
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

      <h1>From Muster</h1>

      <Grandpa></Grandpa>

      {/* <SimpleFrom></SimpleFrom> */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <RefFrom></RefFrom> */}
      {/* <HookFrom></HookFrom> */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
     




      <ReuseableForm 
      fromTile={'Sign Up'} 
      handelSubmit={handleSingUpSubmit}>
        <div>
          <h1>Sign UP</h1>
          <p>please sign up now</p>
        </div>
      </ReuseableForm>


      <ReuseableForm 
      fromTile={'Profile Update'}
      submitBtnText='Update'
      handelSubmit={handleProfileUpdateSubmit}> 
      <div>
        <h1>Update Profile</h1>
        <p>please update your profile</p>
      </div>
      </ReuseableForm> 

    </>
  )
}

export default App
