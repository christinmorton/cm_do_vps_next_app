import { NextResponse } from 'next/server'

import services from '@/assets/data/services.json'

export async function GET () {
    //simulate fetching data from a database
    const timeout = 10000; // Set your desired timeout (in milliseconds)

    setTimeout(() => {
        console.log('Fetching data from the database...')
    }, timeout);


    return NextResponse.json(services, {status: 200});
}