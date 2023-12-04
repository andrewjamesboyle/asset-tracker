import fetch from 'node-fetch'

const createList = async () => {
  const response = await fetch('https://api.propertyradar.com/v1/lists', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.PROPERTY_RADAR_API_KEY}`,
    },
    body: JSON.stringify({
      ListName: 'Risk Assessment 1',
      ListType: 'import',
      isMonitored: 0,
      ImportSource: 'api',
      ImportMatchThreshold: 27,
      ImportType: 'property',
    }),
  })

  const data = await response.json()
  console.log('data', data)
  return data
}

export default createList
