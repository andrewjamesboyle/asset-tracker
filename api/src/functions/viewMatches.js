import { viewList } from 'src/services/viewList'

export const handler = async () => {
  try {
    const data = await viewList(778973)
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
