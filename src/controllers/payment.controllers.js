import mercadopago from "mercadopago";
import { MERCADO_PAGO_API_KEY } from "../config.js";

export const  create= async (req, res) => {
      mercadopago.configure({
          access_token: MERCADO_PAGO_API_KEY,
        });
        try {
            const result = await mercadopago.preferences.create({
              items: [
                {
                  title: "laptop",
                  unit_price: 500,
                  currency_id: "ARS",
                  quantity: 2,
                },
              ],
              notification_url:"https://4e1d-2800-810-491-3eb-8098-930a-44d6-6451.ngrok.io/webhook",
              back_urls: {
                success: "http://localhost:3000/success",
                failure: "http://localhost:3000/failure",
                pending: "http://localhost:3000/pending",
              },
            });
            console.log(result)
            res.json(result.body);
    } catch (error) {
      console.log(error);
    }
  }
  export const success= (req, res) => res.send("success")
  export const failure= (req, res) => res.send("failure")
  export const pending= (req, res) => res.send("pending")
  export const webhook= async (req, res) => {
    const payment = req.query;
    try {
      if (payment.type === "payment") {
        const data = await mercadopago.payment.findById(payment["data.id"]);
        console.log(data);
        // aca deberiamos poner logica para guardar en DB
      }
      res.send(204);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500).json({ error: error.message });
    }
}


