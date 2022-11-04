const express = require("express");

//Route files
const bootcamps = require("./routes/bootcamp.route");

const app = express();

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Mount routers
app.use("/api/v1/bootcamps", bootcamps);

const PORT = 5000;

const server = app.listen(
	PORT,
	console.log(
		`Server is running in development mode on port ${PORT}`.magenta.bold
	)
);

//Handle unhandled rejections
process.on("unhandledRejection", (err, promise) => {
	console.log(`Error: ${err.message}`);
	// Close server & exit process
	server.close(() => process.exit(1));
});
