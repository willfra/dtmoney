import logoImg from '../../assets/logo.svg'
import { Container } from './styles'
import { Content } from './styles'
import { Logo } from './styles'



export function Header() {
    return (
        <Container>
            <Content>

            <Logo src = { logoImg } alt="dtmoney" />
            <button type="button">
                Nova Transação
            </button>
            </Content>
        </Container>
    )
}