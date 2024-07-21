// Components
import { Container } from '../../components/Container'
import { Header } from '../../components/Pages/Header'
import { Show } from '../../components/Pages/Show'
import { About } from '../../components/Pages/About'
import { Projects } from '../../components/Pages/Projects'


export function Home() {
    return(
        <>
            <Container>
                <Header />
                <Show />
                <About />
                <Projects />
            </Container>
        </>
    )
}