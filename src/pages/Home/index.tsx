// Components
import { Container } from '../../components/Container'
import { Header } from '../../components/Pages/Header'
import { Show } from '../../components/Pages/Show'


export function Home() {
    return(
        <>
            <Container>
                <Header />
                <Show />
            </Container>
        </>
    )
}