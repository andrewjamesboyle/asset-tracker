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
    return data
  } catch (error) {
    console.log(error.message)
    // return {
    //   status: 400,
    //   body: JSON.stringify({ error: 'Bad Request: ' + error.message }),
    // }
  }
}
