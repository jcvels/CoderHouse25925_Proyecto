import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardBody, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap'
import { useNotificationServices } from '../services/NotificationService';

function CartForm({setBuyer}) {
    const setToast = useNotificationServices()
   
    const [ getName, setName ] = useState('')
    const [ getSurname, setSurname ] = useState('')
    const [ getPhone, setPhone ] = useState('')
    const [ getEmail, setEmail ] = useState('')
    const [ getSecondEmail, setSecondEmail ] = useState('')
    const [ getRemarks, setRemarks ] = useState('')
    const [ saved, setSaved ] = useState(false) 

    const handleBuyerForm = (e) => {
        e.preventDefault()

        if(getName && getSurname && getPhone && getEmail) {
            if( getEmail === getSecondEmail ) {
                setBuyer({
                    name:getName,
                    surname:getSurname,
                    phone:getPhone,
                    email:getEmail,
                    remarks:getRemarks
                })

                setName('')
                setSurname('')
                setPhone('')
                setEmail('')
                setSecondEmail('')
                setRemarks('')

                setSaved(true)
            }
            else
                setToast('error','Los correos no coinciden')
        }
        else
            setToast('error','Debe completar toda la información requerida')

    }

    if(saved)
        return(
            <Card className='border-warning text-start mt-5'>
                <CardHeader className='bg-warning text-center'>
                    <CardTitle tag="h5">Información de contacto</CardTitle>
                </CardHeader>
                <CardBody>
                    <p className='lead'>Información de contacto guardada</p>
                </CardBody>
            </Card>
        )

    return(
        <Card className='border-warning text-start mt-5'>
            <CardHeader className='bg-warning text-center'>
                <CardTitle tag="h5">Información de contacto</CardTitle>
            </CardHeader>
            <CardBody>
                <Form onSubmit={handleBuyerForm}>
                    <FormGroup>
                        <Row>
                            <Col className='sm-6'>
                                <Label>Nombre</Label>
                                <Input
                                    type="text"
                                    required
                                    value={getName}
                                    onChange={ ({target}) => setName(target.value) }
                                />
                            </Col>
                            <Col className='sm-6'>
                                <Label>Apellido</Label>
                                <Input
                                    type="text"
                                    required
                                    value={getSurname}
                                    onChange={ ({target}) => setSurname(target.value) }
                                />
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Label>Teléfono</Label>
                        <Input
                            type="tel"
                            required
                            value={getPhone}
                            onChange={ ({target}) => setPhone(target.value) }
                        />
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col className='sm-6'>
                                <Label>Correo Electrónico</Label>
                                <Input
                                    type="email"
                                    required
                                    value={getEmail}
                                    onChange={ ({target}) => setEmail(target.value) }
                                />
                            </Col>
                            <Col className='sm-6'>
                                <Label>Validación Correo Electrónico</Label>
                                <Input
                                    type="email"
                                    required
                                    value={getSecondEmail}
                                    onChange={ ({target}) => setSecondEmail(target.value) }
                                />
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Label>Información Adicional</Label>
                        <Input
                            type="text"
                            value={getRemarks}
                            onChange={ ({target}) => setRemarks(target.value) }
                        />
                    </FormGroup>
                    <FormGroup className='text-end'>
                        <button className='btn btn-primary ms-auto me-1'>Guardar información de contacto</button>
                    </FormGroup>
                </Form>
            </CardBody>
        </Card>
    )
}

export default CartForm