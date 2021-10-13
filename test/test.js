import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../express-backend/index.js'

chai.use(chaiHttp);
chai.should();

describe("User", () => {
	describe("POST /", () => {
		it("should register", (done) => {
			chai.request(app)
				.post('/')
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a('object');
					done();
				});
		});

		it("should not register", (done) => {
			const id = 5;
			chai.request(app)
				.post('/${id}')
				.end((err, res) => {
					res.should.have.status(406);
					done();
				});
		});
	});
});