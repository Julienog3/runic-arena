const API_ENDPOINT = 'http://localhost:3000'
import type { SkillType } from '@/types/skill';

export const getAllSkills = async () => {
  const response = await fetch(`${API_ENDPOINT}/skills`, {
    method: 'GET'
  }).then(res => res.json())

  return response
}

export const getOneSkill = async (id: number) => {
  const response = await fetch(`${API_ENDPOINT}/skills/${id}`, {
    method: 'GET'
  }).then(res => res.json())

  return response
}

export const editSkill = async (id: number, skill: SkillType) => {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(
      { 
        name: skill.name,
        description: skill.description,
        value: skill.value,
        isPercentage: skill.isPercentage,
        isActive: skill.isActive,
        red: skill.red,
        blue: skill.blue,
        yellow: skill.yellow
      }
      )
  };
  const response = await fetch(`${API_ENDPOINT}/skills/${id}`, requestOptions)
  .then(res => res.json())

  return response
}

export const createSkill = async (skill: SkillType) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(
      { 
        name: skill.name,
        description: skill.description,
        value: skill.value,
        isPercentage: skill.isPercentage,
        isActive: skill.isActive,
        red: skill.red,
        blue: skill.blue,
        yellow: skill.yellow
      }
      )
  };
  const response = await fetch(`${API_ENDPOINT}/skills`, requestOptions)
  .then(res => window.location.reload())
}

export const deleteSkill = async (id: number) => {
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  };
  const response = await fetch(`${API_ENDPOINT}/skills/${id}`, requestOptions)
  .then(res => {window.history.back()})
}