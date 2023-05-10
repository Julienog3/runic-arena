export enum SkillUnitEnum {
  PERCENT = 'percent',
  FLAT = 'flat',
}

export enum SkillTypeEnum {
  ACTIVE = 'Active',
  PASSIVE = 'Passive',
}

export type SkillType = {
  name: string
  description: string
  value?: number
  valueUnit?: SkillUnitEnum
  isActive?: boolean
  red?: number
  blue?: number
  yellow?: number
}