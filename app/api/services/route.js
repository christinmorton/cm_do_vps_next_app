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