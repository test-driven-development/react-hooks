// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

function Greeting({initialName = ''}) {
  function useLocalStorageEffect(key, defaultValue = '') {
    const [state, setState] = React.useState(
      () => window.localStorage.getItem(key) ?? defaultValue,
    )

    React.useEffect(() => {
      window.localStorage.setItem(key, state)
    }, [state])
    return [state, setState]
  }

  const [name, setName] = useLocalStorageEffect('name', initialName)

  function handleChange(event) {
    setName(event.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App
