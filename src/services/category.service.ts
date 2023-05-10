const API_ENDPOINT = 'http://localhost:3000'

export const getAllCategories = async () => {
  const response = await fetch(`${API_ENDPOINT}/classes`, {
    method: 'GET'
  }).then(res => res.json())

  return response
}
