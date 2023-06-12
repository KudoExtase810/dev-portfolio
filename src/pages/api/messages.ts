import Message from "@/models/messages";
import dbConnect from "@/utils/dbConnect";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        await dbConnect();
        try {
            const message = req.body;
            const newMessage = await Message.create(message);
            res.status(201).json({
                message: "New message created with success.",
            });
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    } else
        res.status(405).json({
            message: "You may only POST to this endpoint!",
        });
}
