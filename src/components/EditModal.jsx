import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
 } from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { deleteAsyncTodos } from '../features/todos/todosSlice';

function EditModal({todo}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch = useDispatch()

    return (
        <>
        <Button onClick={onOpen}>delete</Button>
    
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                do you really want to delete {todo.title} task?
        </ModalBody>

        <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
            Close
            </Button>
            <Button colorScheme='red' onClick={()=>dispatch(deleteAsyncTodos(todo))}>Delete!!</Button>
        </ModalFooter>
        </ModalContent>
    </Modal>
    </>
)
        }
 
export default EditModal;