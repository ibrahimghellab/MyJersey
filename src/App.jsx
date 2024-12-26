import NavBar from './components/NavBar'
import Product from './components/Product'
function App() {
  return (
    <>
      <NavBar></NavBar>
      <div className='flex flex-row gap-5' >
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
      </div>
      
      <h1>App</h1>
    </>
  )
}

export default App
