"use client"
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {

    const [items, setItems] = useState("");
    const [item, setItem] = useState("");

    const refreshItems = async (e: any) => {
        e.preventDefault();

        const response = await fetch("/api/items");
        const data = await response.json();
        
        setItems(JSON.stringify(data));        
    }

    const addItem = async (e: any) => {
        e.preventDefault();

        const response = await fetch("/api/items", {
            method: "POST",
            body: JSON.stringify({
                text: item,
            }), 
        });        
    }

    const updateText = (e: any) => {
        setItem(e.target.value);
    }

    return (
        <main >
            <div className='flex-col'>
                <h1 className='text-center font-black text-4xl p-5'>
                    Next.js CRUD Application
                </h1>

                <div className='flex flex-row gap-2 p-5'>
                    <div className='flex-1 border-2 rounded-lg'>
                        <h1 className='text-center' >
                            CREATE
                        </h1>
                        
                        <div className='flex flex-col gap-5 p-5'>
                            <input className='border-b-2 border-gray-300' type="text" placeholder='Text' onChange={updateText}/>
                            <button className='border-2 border-black' onClick={addItem}>Add</button>
                        </div>

                    </div>

                    <div className='flex-1 border-2 rounded-lg'>
                        <h1 className='text-center' >
                            READ
                        </h1>

                        <div className='flex flex-col gap-5 p-5'>
                            <h2 className='border-2 flex-wrap'>{items}</h2>
                            <button className='border-2 border-black' onClick={refreshItems}>Refresh</button>
                        </div>

                    </div>

                    <div className='flex-1 border-2 rounded-lg'>
                        <h1 className='text-center' >
                            UPDATE
                        </h1>


                    </div>

                    <div className='flex-1 border-2 rounded-lg'>
                        <h1 className='text-center' >
                            DELETE
                        </h1>


                    </div>
                                        
                </div> 
            </div>
                           
          
        </main>
    )
}
