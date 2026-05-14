import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { getDecks, deleteDeck, getUser } from "../api/api"

function Browse() {
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState({})
  const [search, setSearch] = useState("")
  const [allDecks, setAllDecks] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
  const user = getUser()
  if (user) {
    // Load from MongoDB
    loadDecks()
  } else {
    // Load from localStorage
    const saved = localStorage.getItem("flashcards")
    if (saved) setCards(JSON.parse(saved))
  }
}, [])

async function loadDecks() {
  try {
    const decks = await getDecks()
    if (decks && decks.length > 0) {
      // Show latest deck's cards
      setCards(decks[0].cards)
      setAllDecks(decks)
    }
  } catch (e) {
    console.log("Could not load decks")
  }
}

  function toggleFlip(index) {
    setFlipped((prev) => ({ ...prev, [index]: !prev[index] }))
  }

  const filtered = cards.filter(card =>
    card.q.toLowerCase().includes(search.toLowerCase()) ||
    card.a.toLowerCase().includes(search.toLowerCase())
  )

  if (!cards.length) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center">
        <p className="text-gray-400 mb-4">No cards yet! Generate some first.</p>
        <button onClick={() => navigate("/generate")}
          className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition-all duration-300">
          Generate Cards
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen px-6 py-10">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
<div className="flex items-center justify-between mb-6">
  <div>
    <h1 className="text-3xl font-bold text-white">Your Deck</h1>
    <p className="text-gray-400 mt-1">{cards.length} cards — tap any to flip</p>
  </div>
  <button onClick={() => navigate("/generate")}
    className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-5 py-2.5 rounded-2xl text-sm font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/30">
    + New Deck
  </button>
</div>

{/* Deck switcher */}
{allDecks.length > 1 && (
  <div className="flex gap-2 flex-wrap mb-6">
    {allDecks.map((deck, i) => (
      <button
        key={deck._id}
        onClick={() => setCards(deck.cards)}
        className="px-4 py-2 rounded-xl text-sm bg-white/10 border border-white/20 text-gray-300 hover:bg-white/20 hover:text-white transition-all duration-200"
      >
        {deck.topic.slice(0, 20)}...
      </button>
    ))}
  </div>
)}

        {/* Search */}
        <input
          type="text"
          placeholder="🔍 Search cards..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 mb-8 transition-all duration-200"
        />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((card, index) => (
            <div key={index} onClick={() => toggleFlip(index)}
  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 cursor-pointer hover:bg-white/15 hover:scale-105 transition-all duration-300 min-h-36 flex flex-col justify-between group">
  <div>
    <div className="flex items-center justify-between mb-2">
      <span className={`text-xs uppercase tracking-widest font-medium ${flipped[index] ? "text-blue-400" : "text-purple-400"}`}>
        {flipped[index] ? "Answer" : "Question"}
      </span>
     <span className="text-xs bg-purple-500/20 border border-purple-500/40 text-purple-300 px-2.5 py-0.5 rounded-full shadow-sm shadow-purple-500/30">
  #{index + 1}
</span>
    </div>
                <p className={`text-sm font-medium leading-relaxed mt-2 ${flipped[index] ? "text-gray-300" : "text-white"}`}>
                  {flipped[index] ? card.a : card.q}
                </p>
              </div>
              <p className="text-xs text-gray-600 mt-4 text-right group-hover:text-gray-400 transition-colors">
                {flipped[index] ? "tap to see question" : "tap to see answer"}
              </p>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 mt-10">No cards match your search.</p>
        )}
      </div>
    </div>
  )
}

export default Browse