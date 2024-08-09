export interface RegisterMenuProps {
  index: number
  menu: {
    name: string
    price: string
  }
  onChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void
}
