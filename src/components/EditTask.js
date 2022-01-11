import React, { useState } from 'react'
import { Button, Form, FormControl, InputGroup, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { editTask } from '../redux/actions/TodoActions';

function EditTask({el}) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [task, setTask] = useState(el.task)
    const [status, setStatus] = useState(el.done)
    const dispatch = useDispatch()


    return (
        <div>
             <Button style={{padding: '10px 20px', borderRadius: '8px', fontSize:'16px'}} variant="outline-warning" onClick={handleShow}>
        EDIT
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>TASK EDIT</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">Task</InputGroup.Text>
                        <FormControl aria-label="Task" aria-describedby="inputGroup-sizing-default" onChange={(e)=>setTask(e.target.value)} value={task}/>
                    </InputGroup>
                    <Form>
                    <Form.Check aria-label="option 1" label='done' defaultChecked={el.done} onChange={()=>setStatus(!el.done)} />
                   
                    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{dispatch(editTask(el.id,task,status));handleClose()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default EditTask
