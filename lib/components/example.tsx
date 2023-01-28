import {useState} from 'react'

export const nameString = (str: string) => {
  return 'My name is ' + str
}

export default function Example() {
  const [name, setName] = useState('')

  return (
    <>
      <input type='text' id='input' onChange={(e) => setName(e.currentTarget.value)} className='btn'/>
      <button id='button'>Click me!</button>
      <p id='text-display'>{nameString(name)}</p>
    </>
  )
}
