import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function MyApp(){
  return(
    <div>
      <h1>Custom App </h1>
    </div>
  )
}

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'Click me to visit google'
  // agar koi variable bhi hoga na toh isi mei add hojayega
)

ReactDOM.createRoot(document.getElementById('root')).render(
    // MyApp()
    // <MyApp/>
    // anotherElement
    // reactElement
    <App/>
)
