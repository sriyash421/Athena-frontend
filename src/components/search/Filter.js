import React from 'react';
import { Form, Badge, Card } from 'react-bootstrap';
import { Feed } from 'semantic-ui-react';


const Filter = (props) => {
    const {filters, name, filter_fn} = props
    const filter_list = filters.map((filter) => 
    <div>
        <div key={`custom-${filter}`}>
        <Form.Check 
            custom
            type="checkbox"
            id={`${filter}`}
            label={`${filter}`}
            onChange={(event)=>filter_fn(event.target.id)}
        />
        </div>
    </div>
    )
    return (
        <div className="filter-card">
        <Card style={{ width: '18'}} bg="light">
            <Card.Body>
                    <Card.Title><Badge variant="dark">{name}</Badge></Card.Title>
                    <Card.Text>
                    <Feed>
                    <Form>
                        {filter_list}
                    </Form>
                </Feed>
                    </Card.Text>
                </Card.Body>
        </Card>
        </div>
    )
}

export default Filter;