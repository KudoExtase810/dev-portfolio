import mongoose from "mongoose";
const MessageSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, maxLength: 64 },
        email: { type: String, required: true, maxLength: 64 },
        content: { type: String, required: true, maxLength: 2600 },
    },
    { timestamps: true }
);
const Message =
    mongoose.models.Message || mongoose.model("Message", MessageSchema);
export default Message;
