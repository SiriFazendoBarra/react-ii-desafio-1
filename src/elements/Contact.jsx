import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Contact = () => {

    return (
        <div className="container d-flex flex-column align-items-center">
            <h2 className='my-4'>Cuéntanos, ¿En qué te podemos ayudar?</h2>
            <Form className='d-flex flex-column form ' >
                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3 " controlId="">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <div className='d-flex justify-content-center'>
                    <Button className='btn-danger btnForm' >Enviar</Button>
                </div>
            </Form>

        </div>


    )

}

export default Contact