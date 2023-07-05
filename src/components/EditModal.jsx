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

function EditModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
        <Button onClick={onOpen}>Open Modal</Button>
    
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quibusdam, nemo debitis sapiente tempora quas ullam repellendus reprehenderit deserunt! Necessitatibus a tenetur inventore ad perspiciatis eos ullam eveniet, cumque totam?
        </ModalBody>

        <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
            Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
        </ModalFooter>
        </ModalContent>
    </Modal>
    </>
)
        }
 
export default EditModal;