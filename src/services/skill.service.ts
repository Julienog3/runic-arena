const API_ENDPOINT = 'http://localhost:3000'

export const getAllSkills = async () => {
  const response = await fetch(`${API_ENDPOINT}/skills`, {
    method: 'GET'
  }).then(res => res.json())

  return response
}