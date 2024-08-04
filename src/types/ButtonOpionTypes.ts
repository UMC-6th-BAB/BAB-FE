type OptionType = 'default' | 'destructive'

export interface Option {
  label: string
  type: OptionType
  route: string
}
