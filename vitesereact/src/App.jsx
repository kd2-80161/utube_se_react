import './App.css'


function App() {

  const username = "chai aur code"

  return (
    <>
    {/* react will only return single tag but that may contains multiple tag */}
      <h1>chai aur react {username}</h1>
      {/*                    || */}
      {/*                   yeh hota hai evaluated expression */}
      {/* yaha pe javascript ni likhte but uska final outcome likhte ho toh yaha conditions(if else etc) etc ni likh sakte ho */}

      <h1>Hello</h1>
    </>
  )
}

export default App
