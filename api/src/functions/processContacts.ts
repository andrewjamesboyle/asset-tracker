import createList from 'src/services/createList'

export const handler = async () => {
  // Only allow POST requests
  // if (event.httpMethod !== 'POST') {
  //   return {
  //     status: 405,
  //     body: JSON.stringify({ error: 'Method Not Allowed' }),
  //   }
  // }

  try {
    const data = await createList()
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
