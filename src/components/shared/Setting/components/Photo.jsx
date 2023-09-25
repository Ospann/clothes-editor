import { Box, Input } from '@chakra-ui/react'

const Photo = () => {
    return (
        <Box h="100%" padding="4" display="flex" flexDirection="column" gap="2rem">
            <Input type="file" />
        </Box>
    )
}

export default Photo;