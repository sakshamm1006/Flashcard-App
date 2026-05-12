import { useNavigate, useLocation } from "react-router-dom"

function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const user = JSON.parse(localStorage.getItem("user") || "null")

  const links = [
    { path: "/", label: "Home" },
    { path: "/generate", label: "Generate" },
    { path: "/study", label: "Study" },
    { path: "/browse", label: "Browse" },
  ]

  function handleLogout() {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    navigate("/")
  }

  return (
    <nav className="w-full fixed top-0 z-50 px-6 py-4">
      <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-3 flex items-center justify-between">
        <span
          onClick={() => navigate("/")}
          className="text-lg font-bold cursor-pointer bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
        >
          ✦ Flashcard Studio
        </span>

        <div className="flex gap-2">
          {links.map((link) => (
            <button
              key={link.path}
              onClick={() => navigate(link.path)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                location.pathname === link.path
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/30"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex gap-2 items-center">
          {user ? (
            <>
              <span className="text-sm text-purple-300 font-medium">Hi, {user.name}!</span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                className="px-4 py-2 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/register")}
                className="px-4 py-2 rounded-xl text-sm font-medium bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-purple-500/30"
              >
                Register
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar