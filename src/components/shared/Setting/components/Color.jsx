import { Box, Image } from "@chakra-ui/react";
import classes from '../Settings.module.css';

const Color = ({ handleChange }) => {
    const url = "https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/";

    return (
        <Box className={classes.colorContainer} >
            <Image
                onClick={() => handleChange("clother_color", "red")}
                src={`${url}/red.png`}
                className="clothesButton"
            />
            <Image
                onClick={() => handleChange("clother_color", "black")}
                src={`${url}/black.png`}
                className="clothesButton"
            />
            <Image
                onClick={() => handleChange("clother_color", "white")}
                src={`${url}/white.png`}
                className="clothesButton"
            />
            <Image
                onClick={() => handleChange("clother_color", "blue")}
                src={`${url}/blue.png`}
                className="clothesButton"
            />
        </Box>
    )
}

export default Color;