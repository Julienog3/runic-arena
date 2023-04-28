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
  type: TypeEnum 
  category: CategoryEnum
}