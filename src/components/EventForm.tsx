import React, { FC, useState} from 'react';
import {Form, Input, DatePicker, Button, Row, Select} from 'antd';
import { rules } from '../utils/rules';
import { IUser } from '../models/IUser';
import { IEvent } from '../models/IEvent';
import { Moment } from 'moment';
import { formatDate } from '../utils/date';
import { useTypedSelector } from '../hooks/useTypedSelector';

interface EventFormProps {
    guests: IUser[],
    submit: (event:IEvent) => void
}

const EventForm:FC<EventFormProps> = (props) => {

    const [event, setEvent] = useState<IEvent>({
        author: '',
        date: '',
        description: '',
        guest: ''
    } as IEvent);

    const {user} = useTypedSelector(state => state.auth)

    const SelectDate = (date: Moment | null) => {
       if (date) {
        setEvent({...event, date: formatDate(date.toDate())})
       }
    }

    const submitForm = () => {
        props.submit({...event, author: user.username})
    }

    return (
        <Form onFinish={submitForm}>
             <Form.Item
                label="Event description"
                name="description"
                rules={[rules.required('Please input event!')]}>
                <Input
                    onChange={e => setEvent({...event, description: e.target.value})}
                    />
            </Form.Item>
            <Form.Item
                label="Event date"
                name="date"
                rules={[rules.required('Please select date event!'), rules.isDateAfter('Сannot be created in the past')]}>
                <DatePicker
                    onChange={(date) => SelectDate(date)}
                />              
            </Form.Item>
            <Form.Item
            rules={[rules.required('Please check quest!')]}>
            <Select onChange={(guest: string) => setEvent({...event, guest})}>
                {props.guests.map(guest => 
                        <Select.Option key={guest.username} value={guest.username}>
                            {guest.username}
                        </Select.Option>
                    )}
            </Select>
            </Form.Item>
            
            <Row justify='end'>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Add
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    );
};

export default EventForm;