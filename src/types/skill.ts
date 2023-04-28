export enum SkillUnitEnum {
  PERCENT = 'percent',
  FLAT = 'flat',
}

export enum SkillTypeEnum {
  ACTIVE = 'active',
  PASSIVE = 'passive',
}

export type SkillType = {
  name: string
  description: string
  value?: number
  valueUnit?: SkillUnitEnum
  type?: SkillTypeEnum
}