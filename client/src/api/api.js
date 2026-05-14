const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000"

export function getToken() {
  return localStorage.getItem("token")
}

export function getUser() {
  return JSON.parse(localStorage.getItem("user") || "null")
}

export async function saveDeck(topic, cards) {
  const res = await fetch(`${BASE_URL}/decks/save`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${getToken()}`
    },
    body: JSON.stringify({ topic, cards })
  })
  return res.json()
}

export async function getDecks() {
  const res = await fetch(`${BASE_URL}/decks`, {
    headers: {
      "Authorization": `Bearer ${getToken()}`
    }
  })
  return res.json()
}

export async function deleteDeck(id) {
  const res = await fetch(`${BASE_URL}/decks/${id}`, {
    method: "DELETE",
    headers: {
      "Authorization": `Bearer ${getToken()}`
    }
  })
  return res.json()
}
