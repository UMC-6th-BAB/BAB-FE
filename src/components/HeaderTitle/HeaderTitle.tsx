import {
  Icon,
  Title,
  Container,
} from '@components/HeaderTitle/HeaderTitle.style'
import NotifyIcon from '@components/NotifyIcon'
import BackIcon from '@components/BackIcon'

interface HeaderTitleStyleProps {
  icon?: 'back' | 'notification'
}
interface HeaderTitleProps extends HeaderTitleStyleProps {
  title: string
  onClick?: () => void
}

export default function HeaderTitle({
  title,
  icon,
  onClick,
}: HeaderTitleProps) {
  return (
    <Container>
      {icon == 'back' && (
        <Icon onClick={onClick}>
          <BackIcon />
        </Icon>
      )}
      <Title icon={icon}>{title}</Title>
      {icon == 'notification' && (
        <Icon onClick={onClick}>
          <NotifyIcon />
        </Icon>
      )}
    </Container>
  )
}
