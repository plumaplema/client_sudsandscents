import { mongooseConnect } from "@/components/lib/mongoose";
import { Setting } from "@/models/Setting";

export default async function handle(req, res) {
  await mongooseConnect();

  if (req.method === "GET") {
    const { name } = req.query;
    res.json(await Setting.findOne({ name }));
  }
}
