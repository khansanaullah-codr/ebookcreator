require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoute");
const bookRoutes = require("./routes/bookRoute");
const aiRoutes = require("./routes/aiRoute");
const exportRoutes = require("./routes/exportRoute");

const app = express();

// Middleware to handle CORS
app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

// Connect Database
connectDB();


// Middleware
app.use(express.json());


// Static folder for uploads
app.use("/backend/uploads", express.static(path.join(__dirname, "uploads")));


// Routes
app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/export", exportRoutes);


// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
