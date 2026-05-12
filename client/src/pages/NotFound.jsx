import { useNavigate } from "react-router-dom"

function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-12 max-w-md w-full">
        <div className="text-8xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
          404
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Page Not Found</h2>
        <p className="text-gray-400 mb-8">Looks like this page doesn't exist!</p>
        <button
          onClick={() => navigate("/")}
          className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/30"
        >
          Go Home
        </button>
      </div>
    </div>
  )
}

export default NotFound