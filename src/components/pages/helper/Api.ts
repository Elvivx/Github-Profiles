import axios from "axios"

export const api = axios.create({
  baseURL: `https://api.github.com`,
  headers: {
    // Authorization: `Bearer ${import.meta.env.VITE_GITHUB_CLIENT_ID}`,
  },
})
console.log(api)
// console.log(import.meta.env.VITE_GITHUB_CLIENT_ID)
