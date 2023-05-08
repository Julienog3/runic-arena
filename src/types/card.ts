import type { SkillType } from "./skill"

export enum TypeEnum {
  CHAOS = 'chaos',
  HALO = 'halo'
}

export enum CategoryEnum {
  HEALER = 'healer',
  WARRIOR = 'warrior',
  ROGUE = 'rogue',
  ARCHER = 'archer',
  WIZARD = 'wizard'
}

export type CardType = {
  name: string
  description?: string
  power: number
  illustration: string
  type: TypeEnum 
  category: CategoryEnum
  skills: SkillType[] 
}