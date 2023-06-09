import type { SkillType } from "./skill"

export enum TypeEnum {
  CHAOS = 'Chaos',
  HALO = 'Halo'
}

export enum CategoryEnum {
  HEALER = 'healer',
  WARRIOR = 'warrior',
  ROGUE = 'rogue',
  ARCHER = 'archer',
  WIZARD = 'wizard'
}

export type CardType = {
  id: number
  name: string
  description?: string
  image?: string
  value: number
  illustration: string
  typeId: number
  classId: number
  type: TypeEnum 
  category: CategoryEnum
  skills: SkillType[] 
}

export type CardPayloadType = {
  name: string
  description?: string
  value: number
  image: string
  typeId: number
  classId: number
  activeSkills: number[] 
  passiveSkill: number
}

