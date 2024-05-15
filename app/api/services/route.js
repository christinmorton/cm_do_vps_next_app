import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

import services from '@/assets/data/services.json'

export async function GET () {
    //simulate fetching data from a database
    const timeout = 2000; // Set your desired timeout (in milliseconds)

    setTimeout(() => {
        console.log('Fetching data from the database...')
    }, timeout);


    return NextResponse.json(services, {status: 200});
}


export async function POST (request) {
    const body = await request.json();

    console.log(body);

    // const response = await fetch('/api/contact', {
    // method: 'POST',
    // body: JSON.stringify(body)
    // })
    const timeout = 2000;

    setTimeout(() => {
        console.log('Saving data to the database...')
    }, timeout);


    return NextResponse.json('all good homie!', {status: 200});
}