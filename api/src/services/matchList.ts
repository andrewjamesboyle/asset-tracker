import fetch from 'node-fetch'

export async function matchList(listId: number, contacts: any[]) {
  const response = await fetch(
    `https://api.propertyradar.com/v1/lists/${listId}/import/items`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.PROPERTY_RADAR_API_KEY}`,
      },
      body: JSON.stringify({ contacts }),
    }
  )
  console.log('response', response)
}
