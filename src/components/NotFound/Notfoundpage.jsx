export default function Notfoundpage() {
    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-200">
        <div className="text-center">
          <h1 className="text-7xl font-bold text-blue-400">404</h1>
          <p className="text-3xl text-gray-600 mt-4">Oops! Page not found</p>
          <p className="mt-2 text-gray-500">Sorry, we couldn't find the page you're looking for.</p>
          <a
            href="/"
            className="mt-6 inline-block px-6 py-3 text-white bg-blue-400 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Go back to Home
          </a>
        </div>
      </div>
    )
}

