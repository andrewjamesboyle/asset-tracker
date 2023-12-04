export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { status: 405, body: 'Method Not Allowed' }
  }

  return {
    status: 200,
    body: JSON.stringify({ message: 'Hello, World!' }),
  }
}
