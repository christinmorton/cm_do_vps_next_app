"use server";

const token = 'e68f2a756cd802e6268c2ea8353cc8dc4538192234ca9f7090f7e2c0a5534a55f9f82e645b06bfb3fff28afc06f9748b929f22f3ca3a18d4fb3bfbd7966d1f97330cfbb1e505f5194d6a4385f10032de13a1153b90a4fa05035ed38c717b3e0f4c94e9217ade8ea636aea4cb8cc7467c6571b07bad27cf9aa93f21866e070555'

export const SendContactMessage = async (formData) => {
    console.log('formData:', formData)

    const data = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
    }

    const response = await fetch('http://localhost:1337/api/contact-messages', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({data})
    })

    console.log('response:', response)
}