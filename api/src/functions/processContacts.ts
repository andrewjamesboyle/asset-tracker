import type { APIGatewayEvent } from 'aws-lambda'

export const handler = async (event: APIGatewayEvent) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    }
  }

  try {
    const data = JSON.parse(event.body)
    // Add TypeScript typings and process data here
    console.log('incoming JSON data', data)

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Hello World' }),
    }
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Bad Request: ' + error.message }),
    }
  }
}
