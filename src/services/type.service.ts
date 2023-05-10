const API_ENDPOINT = 'http://localhost:3000'

export const getAllTypes = async () => {
  const response = await fetch(`${API_ENDPOINT}/types`, {
    method: 'GET'
  }).then(res => res.json())

  return response
}
