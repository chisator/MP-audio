import { config } from "dotenv";
config();
export const PORT = process.env.PORT || 3000;
export const MERCADO_PAGO_API_KEY = process.env.MERCADO_PAGO_TOKEN;
