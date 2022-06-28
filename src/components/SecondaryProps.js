import React, { useState } from 'react'

export default function SecondaryProps({SecondaryProps, handleUpdate, MainProp}) {
    const [secondaryProps, setSecondaryProps] = useState(SecondaryProps)

    const handleInputChange = (event) => {
        const {name, value} = event.target
        handleUpdate(MainProp,name,value)
        setSecondaryProps({
            ...secondaryProps,
            [name]:value
        })
    }
    const getPropertiesList = (props) => {
        let secondaryPropsArr = Object.keys(props)
        secondaryPropsArr = secondaryPropsArr.map((prop,index)=>{
            return (<article className='pb-4 w-full flex justify-between items-center' key={index}>
                <label className='bg- w-1/3 pr-2'>{prop}: </label>
                {<input className='rounded p-3 border w-1/2 ' name={prop} value={secondaryProps[prop]} onChange={handleInputChange}/>}
            </article>)
        })
        return secondaryPropsArr
    }
    
  return (
    <section className='w-full'>
        {secondaryProps && getPropertiesList(secondaryProps)}
    </section>
  )
}
