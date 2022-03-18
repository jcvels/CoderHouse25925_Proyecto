import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardBody, Form, FormGroup, Label, Input, Row, Col, Button } from 'reactstrap'
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
    const [ hidden, setHidden ] = useState(false) 

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

                setSaved(true)
                setHidden(true)
            }
            else
                setToast('error','Los correos no coinciden')
        }
        else
            setToast('error','Debe completar toda la información requerida')

    }

    if(hidden)
        return(
            <Card className='border-warning text-start mt-5'>
                <CardHeader className='bg-warning text-center'>
                    <CardTitle tag="h5">Información de contacto</CardTitle>
                </CardHeader>
                <CardBody>
                    <p className='lead'>Información de contacto guardada</p>
                    <Button className='btn-sm' onClick={ () => setHidden(false) }>Ver</Button>
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
                                    disabled={ saved }
                                />
                            </Col>
                            <Col className='sm-6'>
                                <Label>Apellido</Label>
                                <Input
                                    type="text"
                                    required
                                    value={getSurname}
                                    onChange={ ({target}) => setSurname(target.value) }
                                    disabled={ saved }
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
                            disabled={ saved }
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
                                    disabled={ saved }
                                />
                            </Col>
                            <Col className='sm-6'>
                                <Label>Validación Correo Electrónico</Label>
                                <Input
                                    type="email"
                                    required
                                    value={getSecondEmail}
                                    onChange={ ({target}) => setSecondEmail(target.value) }
                                    disabled={ saved }
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
                            disabled={ saved }
                        />
                    </FormGroup>
                    <FormGroup className='text-end'>
                        {
                            saved
                                && <button className='btn btn-secondary ms-auto' onClick={ () => setSaved(false) }>Editar</button>
                        }
                        <button className='btn btn-primary ms-1 me-1'>Guardar información de contacto</button>
                    </FormGroup>
                </Form>
            </CardBody>
        </Card>
    )
}

export default CartForm