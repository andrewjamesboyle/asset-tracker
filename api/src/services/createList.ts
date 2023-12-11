import fetch from 'node-fetch'

const createList = async () => {
  try {
    const response = await fetch('https://api.propertyradar.com/v1/lists', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.PROPERTY_RADAR_API_KEY}`,
      },
      body: JSON.stringify({
        ListName: 'Risk Assessment 13',
        ListType: 'import',
        isMonitored: 0,
        ImportSource: 'api',
        ImportMatchThreshold: 27,
        ImportType: 'property',
      }),
    })

    const data = await response.json()
    console.log('create list response: ', data)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export default createList
