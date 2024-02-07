const request = require("supertest");
const createServer = require("../utils/server");

const app = createServer();

describe("admin", () => {
  describe("login admin route", () => {
    describe("password not provided", () => {
      it("should return 400", async () => {
        const userInput = { email: "test@test.com", password: null };
        const { statusCode } = await request(app)
          .post("/api/login")
          .send(userInput);
        expect(statusCode).toBe(400);
      });
    });
    describe("email not provided", () => {
      it("should return 400", async () => {
        const userInput = { email: null, password: "udhbauhdbaw" };
        const { statusCode } = await request(app)
          .post("/api/login")
          .send(userInput);
        expect(statusCode).toBe(400);
      });
    });
  });
  describe("logout admin route", () => {
    it("should return 200", async () => {
      const { statusCode } = await request(app).get("/api/logout");
      expect(statusCode).toBe(200);
    });
  });
});
