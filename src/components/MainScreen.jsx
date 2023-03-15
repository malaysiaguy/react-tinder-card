import { Container, Row } from 'reactstrap'
import Footer from './Footer'


function MainScreen({ children, title1, title2, title3 }) {
    return (
        <div>
            <Container>
                <Row>
                    <div className='page'>
                        {
                            (title1 || title2 || title3) && (
                                <>
                                    <div className='main-heading text-center mb-4'>
                                        <span className='text-secondary px-1'>{title1}</span>
                                        <span className='text-danger px-1'>{title2}</span>
                                        <span className='text-secondary px-1'>{title3}</span>
                                    </div>
                                    <hr />
                                </>
                            )
                        }
                        {children}
                    </div>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default MainScreen