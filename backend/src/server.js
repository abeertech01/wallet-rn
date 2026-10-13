import express from "express"
import { initDB } from "./config/db.js"
import "dotenv/config"
import rateLimiter from "./middleware/rateLimiter.js"

import transactionRoute from "./routes/transactions.route.js"

const app = express()

// middlewares
app.use(rateLimiter)
app.use(express.json())

const PORT = process.env.PORT || 5001

app.use("/api/transactions", transactionRoute)

initDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is up and running on PORT:`, PORT)
  })
})
