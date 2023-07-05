import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Input,
    FormControl,
    useDisclosure,
    IconButton,
    useToast} from '@chakra-ui/react';
import { useState } from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { editTodoAsync } from '../features/todos/todosSlice';
const EditModal = ({todo}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [newTitle,setNewTitle] = useState(todo.title)
    const toast =useToast()
    const dispatch = useDispatch()
    const editHandler = ()=>{
        dispatch(editTodoAsync({id:todo.id,title:newTitle,completed:todo.completed}))
        onClose();
        toast({
            title: 'todo edited.',
            description: "We've editted your task title.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })

    }

    return (
        <>
        <Button onClick={onOpen}>edit</Button>
    
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
                <ModalContent>
                    <ModalHeader>edit Title</ModalHeader>
                        <ModalCloseButton />
                    <ModalBody>
                        <Input onChange={(e) => setNewTitle(e.target.value)} value={newTitle} placeholder='Basic usage' />
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='gray' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button colorScheme='blue' onClick={()=>editHandler()} >edit</Button>
                    </ModalFooter>
                </ModalContent>
        </Modal>
    </>
    );
}
 
export default EditModal;