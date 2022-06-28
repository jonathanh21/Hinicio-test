import React, { useState, useEffect } from 'react';
import { getProperties, updateProperties } from './APIClient.js'
import SecondaryProps from './components/SecondaryProps'
import Checkmark from './components/Checkmark'
import './App.css';

function App() {
  const [properties, setProperties] = useState() 
  const [showCheckmark, setShowCheckmark] = useState(false)

  useEffect(()=>{
    //make async call to the API to get the 
    const props = getProperties()
    setProperties(props)
  },[])

  const handleUpdateProp = (MainProp, name, value) =>{
    setProperties({
      ...properties,
      [MainProp]:{
        ...properties[MainProp],
        [name]:value
      }
    })
  }

  const getPropertiesList = (properties) => {
    let mainPropsArr = Object.entries(properties)
    mainPropsArr= mainPropsArr.map((prop,index)=>{
                        return (<div key={index} className="justify-center border m-4 p-10 min-w-[20rem] w-[20rem] lg:w-auto rounded-sm bg-white drop-shadow-xl">
                          <h2 className='text-2xl text-start font-medium pb-8'>{prop[0]}</h2>
                          {<SecondaryProps SecondaryProps={prop[1]} handleUpdate={handleUpdateProp} MainProp={prop[0]}/> }
                        </div>)
                      })  
    return mainPropsArr
  }

  const onSubmitProps = (event) => {
    event.preventDefault()

    updateProperties(properties)
    setShowCheckmark(true)

    setTimeout(()=>{
      setShowCheckmark(false)
    },3000)
  }

  
  return (
    <div className="w-full pt-24">
      {showCheckmark?<div className='h-[100vh] w-[100vw] fixed z-10 top-0'><Checkmark /></div>:null}
      <form className='w-full flex flex-col justify-center items-center'>
        <section className='w-full flex flex-col lg:flex-row justify-center items-center flex-wrap'>
          {properties && getPropertiesList(properties)}
        </section>
        <button className='bg-white w-64 p-3 hover:bg-gray-200 pointer-cursor mt-20 drop-shadow-xl' onClick={onSubmitProps}>Save </button>
      </form>
    </div>
  );
}

export default App;
