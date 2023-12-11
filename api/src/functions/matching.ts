import matchList from 'src/services/matchList'

export const handler = async () => {
  // Only allow POST requests
  // if (event.httpMethod !== 'POST') {
  //   return {
  //     status: 405,
  //     body: JSON.stringify({ error: 'Method Not Allowed' }),
  //   }
  // }

  try {
    const data = await matchList(778870, contacts)
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    }
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Bad Request: ' + error.message }),
    }
  }
}

const contacts = [
  {
    FullName: 'ABELINA TORAL',
    Address: '417 HILDA ST',
    City: 'OREGON CITY',
    State: 'OR',
    ZipFive: 97045,
  },
  {
    FullName: 'ADAM R KRISS',
    Address: '1422 SE 209TH AVE',
    City: 'GRESHAM',
    State: 'OR',
    ZipFive: 97030,
  },
]
