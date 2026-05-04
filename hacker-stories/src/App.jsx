import * as React from 'react'

const welcome = {
  greeting: 'Hey, ',
  title: 'there',
}

function App() {
  const title = "React"
  return (
    <div>
      <h1 style={{ fontFamily: 'Roboto, sans-serif' }}>{welcome.greeting} {welcome.title}</h1>
      <label htmlFor='search'>Search: </label>
      <input id='search' type='text'></input>
    </div>

  )
}

export default App
