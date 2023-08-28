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
    
    await query({
        query:"INSERT INTO items (text) VALUES (?)",
        values: [data.text],
    });

    return new Response("Data added", { status:200 });
}

export const PUT = async (req, res) => {

    const data = await req.json();

    
    await query({
        query:"UPDATE items SET text= ? WHERE id= ?",
        values: [data.text, data.id],
    });

    return new Response("Data updated", { status:200 });
}

export const DELETE = async (req, res) => {

    const data = await req.json();

    
    await query({
        query:"DELETE FROM items WHERE id= ?",
        values: [data.id],
    });

    return new Response("Deleted", { status:200 });
}