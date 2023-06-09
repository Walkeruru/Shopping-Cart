import { Link } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div className="App">
      <section className="text-white">
  <div
    className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
  >
    <div className="mx-auto max-w-3xl text-center">
      <h1
        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        Your favorite phones

        <span className="sm:block"> you will find it here. </span>
      </h1>

      <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
        tenetur fuga ducimus numquam ea!
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          to={'/shop'}
        >
          Shop
        </Link>

        <Link
          className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          to={'/about'}
        >
          Learn More
        </Link>
      </div>
    </div>
  </div>
</section>
      <footer aria-label="Site Footer">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-center">
            <p
              className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400 lg:mt-0 lg:text-right"
            >
              Copyright &copy; 2023. <a href="https://github.com/Walkeruru">Check my Github</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
