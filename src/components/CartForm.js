import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardBody, Form, FormGroup, Label, Input } from 'reactstrap'

function CartForm({setBuyer}) {
    
    const [ getName, setName ] = useState('')
    const [ getPhone, setPhone ] = useState('')
    const [ getEmail, setEmail ] = useState('')
    const [ getRemarks, setRemarks ] = useState('')
    const [ saved, setSaved ] = useState(false) 

    const handleBuyerForm = (e) => {
        e.preventDefault()

        setBuyer({
            name:getName,
            phone:getPhone,
            email:getEmail,
            remarks:getRemarks
        })

        setName('')
        setPhone('')
        setEmail('')
        setRemarks('')

        setSaved(true)
    }

    if(saved)
        return(
            <Card className='border-warning text-start mt-5'>
                <CardHeader className='bg-warning text-center'>
                    <CardTitle tag="h5">Información de contacto</CardTitle>
                </CardHeader>
                <CardBody>
                    <p>Información de contacto guardada</p>
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
                        <Label>Nombre</Label>
                        <Input
                            type="text"
                            required
                            value={getName}
                            onChange={ ({target}) => setName(target.value) }
                        />
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
                        <Label>Correo Electrónico</Label>
                        <Input
                            type="email"
                            required
                            value={getEmail}
                            onChange={ ({target}) => setEmail(target.value) }
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Información Adicional</Label>
                        <Input
                            type="text"
                            value={getRemarks}
                            onChange={ ({target}) => setRemarks(target.value) }
                        />
                    </FormGroup>
                    <button className='btn btn-primary ms-auto me-1'>Guardar información de contacto</button>
                </Form>
            </CardBody>
        </Card>
    )
}

export default CartForm