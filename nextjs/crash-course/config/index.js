const dev = process.env.NODE_ENV !== 'production'

export const NEXT_URL = process.env.NEXT_PUBLIC_FRONTEND || "http://localhost:3000/"

export const API_URL = process.env.BACKEND || "http://localhost:9999"
