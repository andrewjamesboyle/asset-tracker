import fetch from 'node-fetch'

// interface matchListArgs {
//   listId: number
// }

export const matchList = async (listId, contacts) => {
  const query = new URLSearchParams({
    Purchase: '0',
    Fields: 'ListImportItemID',
  }).toString()
  const response = await fetch(
    `https://api.propertyradar.com/v1/lists/${listId}/import/items?${query}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.PROPERTY_RADAR_API_KEY}`,
      },
      body: JSON.stringify({ contacts: contacts }),
    }
  )
  console.log(response)

  // Handle the response as needed
}
