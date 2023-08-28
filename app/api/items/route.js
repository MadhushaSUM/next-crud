import { query } from "../../../utils/db";

export const GET = async (req, res) => {
    
    const items = await query({
        query:"SELECT * FROM items",
        values: [],
    });

    return new Response(JSON.stringify(items), { status:200 });
}

export const POST = async (req, res) => {

    const data = await req.json();
    
    const items = await query({
        query:"INSERT INTO items (text) VALUES (?)",
        values: [data.text],
    });

    return new Response("Data added", { status:200 });
}
