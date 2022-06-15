"use strict";
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod };
	};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const db_js_1 = __importDefault(require("./db.js"));
const cors_ts_1 = __importDefault(require("cors-ts"));
const routes_1 = __importDefault(require("./src/routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const corsOption = {
	credentials: true,
	origin: ["http://localhost:3000"],
};
(0, db_js_1.default)();
// middlewares
app.use((0, cors_ts_1.default)(corsOption));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// routes
app.use("/api", routes_1.default);
const PORT = 8000 || process.env.PORT;
app.listen(PORT, () => {
	console.log(`Server ruuning at port : ${PORT}`);
});
