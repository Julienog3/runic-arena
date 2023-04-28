enum UnitEnum {
  PERCENT = 'percent',
  FLAT = 'flat',
}

enum TypeEnum {
  ACTIVE = 'active',
  PASSIVE = 'passive',
}

export type SkillType = {
  name: string
  description: string
  value?: number
  valueUnit?: UnitEnum
  type?: TypeEnum
}