import createList from 'src/services/createList'
import matchList from 'src/services/matchList'
import { viewList } from 'src/services/viewList'

export const handler = async (event) => {

  // To Do: validate source
  // To Do: DB.create(contacts)? store the agent name, email, and contacts

   // Only allow POST requests
   if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    }
  }

  try {
    // Parse the JSON body from the event
    const contacts = JSON.parse(event.body)
    console.log('event.body contacts', contacts)

    const listData = await createList().catch((error) => {
      throw new Error(`Error creating list: ${error.message}`)
    })

    // store the response in Google Cloud Storage

    if (!listData.results) {
      throw new Error('Error creating list: no results')
    }

    const ListID = listData.results[0].ListID
    await matchList(ListID, contacts).catch((error) => {
      throw new Error('Error matching list: ' + error.message)
    })

    // store response in GCS

    const contactsInList = await viewList(ListID).catch((error) => {
      throw new Error('Error viewing list: ' + error.message)
    })

    console.log('contactsInList', contactsInList)

    // const properties = contactsInList.results.map((contact) => {

    // })
    // To Do: const properties = extract radar ID's from contacts in List
    // To Do: DB.create(properties)
    // To Do: const additionalProperties = GET request to viewOwners to grab additional Radar ID's and personKeys for each owner
    // To Do: DB.update(additionalProperties)
    // To Do: const propDetails = for each radar ID, GET request to properties from radar ID for details
    // To Do: DB.update(propDetails)
    return {
      statusCode: 200,
      body: JSON.stringify(contactsInList),
    }
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Bad Request: ' + error.message }),
    }
  }
}

