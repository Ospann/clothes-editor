import { Box, Heading } from "@chakra-ui/react";

const Display = ({ clother_color, text, text_color, text_size, image }) => {

    const textStyle = {
        color: "white",
        textShadow: "1px 1px 2px black",
    };
    return (
        <Box w="70%" h="70%" display="flex" justifyContent="center">
            <Box
                w="60%"
                aspectRatio="1 / 0.8"
                backgroundSize="cover"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                backgroundImage={`url(https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/${clother_color}.png)`}>
                <Box border="5px solid white" background="#e6e6e6" h="20%" display="flex" alignItems="center">
                    <Heading style={textStyle}>Your Photo</Heading>
                </Box>
                <Heading style={{...textStyle,
                    color:text_color,
                    fontSize: `${text_size}px`
                }}>{text}</Heading>
        </Box>
        </Box >
    )
}

export default Display;