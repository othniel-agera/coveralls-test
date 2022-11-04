const express = require("express");

//Route files
const route = require("./route");

const app = express();

// Mount routers
app.use("/api/v1", route);

const PORT = 5030;

const server = app.listen(
	PORT,
	console.log(`Server is running in development mode on port ${PORT}`)
);

//Handle unhandled rejections
process.on("unhandledRejection", (err, promise) => {
	console.log(`Error: ${err.message}`);
	// Close server & exit process
	server.close(() => process.exit(1));
});
