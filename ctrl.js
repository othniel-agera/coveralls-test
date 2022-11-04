const ctrl = async (req, res) => {
	try {
		return res.status(201).json({
			message: "Index",
			success: true,
		});
	} catch (error) {
		return res.status(500).send({ error: error.message || error });
	}
};

module.exports = ctrl;
