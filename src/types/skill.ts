export enum SkillUnitEnum {
  PERCENT = 'percent',
  FLAT = 'flat',
}

export enum SkillTypeEnum {
  ACTIVE = 'Active',
  PASSIVE = 'Passive',
}

export type SkillType = {
  id: Number
  name: string
  description: string
  value?: number
  valueUnit?: SkillUnitEnum
  isPercentage?: boolean
  isActive?: boolean
  red?: number
  blue?: number
  yellow?: number
}