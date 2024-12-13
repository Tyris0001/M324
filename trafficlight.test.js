const request = require('supertest');
const app = 'http://localhost:3000';

describe("GET /api/welcome", () => {
    it("welcome message", async () => {
        return request(app)
        .get("/api/welcome")
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(function (res) {
            if (!res.body.hasOwnProperty('status')) {
                throw new Error("Expect 'status' key!");
            }
            if (!res.body.hasOwnProperty('message')) {
                throw new Error("Expect 'message' key!")
            }
        })
        .then((res) =>{
            expect(res.statusCode).toBe(200);
        })
    });
});

describe("GET /api/trafficlight", () => {
    it("out of order", async () => {
        return request(app)
        .get("/api/trafficlight")
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(function (res) {
            if (!res.body.hasOwnProperty('status')) {
                throw new Error("Expect 'status' key!");
            }
            if (!res.body.hasOwnProperty('message')) {
                throw new Error("Expect 'message' key!")
            }
        })
        .then((res) => {
            expect(res.body.message).toBe('OUT OF ORDER')
        })
    });
});

describe("GET /api/trafficlight/:color", () => {
    it("red", async () => {
        
    });

    it("green", async () => {
//??
//??
//??
//??
//??
//??
//??
    });

    it("orange", async () => {
//??
//??
//??
//??
//??
//??
//??
    });
});

