const ctrl = async (req, res) => {
	try {
		// console.log(req.params);
		if (req.params[0] === "fail") throw new Error("Something went wrong");
		return res.status(201).json({
			message: "Index",
			success: true,
		});
	} catch (error) {
		return res.status(500).send({ error: error.message || error });
	}
};

module.exports = ctrl;
