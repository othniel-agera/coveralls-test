const request = require("supertest");
const url = require("url");
const { expect } = require("chai");
const { app } = require("./server");

const getRequest = (route) =>
	request(app).get(`/api/v1${route}`).set("Accept", "application/json");
const postRequest = (route) =>
	request(app).post(`/api/v1${route}`).set("Accept", "application/json");
const putRequest = (route) =>
	request(app).put(`/api/v1${route}`).set("Accept", "application/json");
const deleteRequest = (route) =>
	request(app).delete(`/api/v1${route}`).set("Accept", "application/json");
describe("User Registration Test", () => {
	describe("Positive Tests", () => {
		it("should go to index", async () => {
			const response = await getRequest("/").expect(201);
			const resp_data = response.body;
			expect(resp_data).to.be.an("object");
			expect(resp_data).to.have.property("message");
			expect(resp_data).to.have.property("success");
			expect(resp_data.message).to.be.an("string");
			expect(resp_data.message).to.equal("Index");
			expect(resp_data.success).to.be.an("boolean");
			expect(resp_data.success).to.equal(true);
		});
	});

	describe("Negative Tests", () => {
		before(async () => {
			console.log("before");
		});
		it("should not go to index", async () => {
			const response = await getRequest("/fail").expect(500);

			const resp_data = response.body;
			expect(resp_data).to.be.an("object");
			expect(resp_data).to.have.property("error");
			expect(resp_data.error).to.be.an("string");
			expect(resp_data.error).to.equal("Something went wrong");
		});
		after(async () => {
			console.log("after");
		});
	});
});
