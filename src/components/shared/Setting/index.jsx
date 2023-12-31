import { Box, Drawer, DrawerCloseButton, useDisclosure, DrawerHeader, DrawerContent, DrawerBody } from "@chakra-ui/react";
import classes from './Settings.module.css';
import { useRef, useState } from "react";
import Text from "./components/Text";
import Color from "./components/Color";
import Photo from "./components/Photo";

const Settings = ({ handleChange }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    const [panel, selectedPanel] = useState("color");

    const Panels = {
        "color": Color,
        "text": Text,
        "photo": Photo
    }

    const handleClick = (target) => {
        selectedPanel(target)
        onOpen()
    }

    const Component = Panels[panel];

    return (
        <>
            <Box className={classes.SettingBox} ref={btnRef}>
                <Box
                    className={classes.SettingBottom}
                    onClick={() => handleClick("color")}>
                    Color
                </Box>
                <Box
                    className={classes.SettingBottom}
                    onClick={() => handleClick("text")}>
                    Text
                </Box>
                <Box
                    className={classes.SettingBottom}
                    onClick={() => handleClick("photo")}>
                    Photo
                </Box>
            </Box>
            <Drawer
                isOpen={isOpen}
                placement='left'
                size="md"
                onClose={onClose}
                finalFocusRef={btnRef}

            >
                <DrawerContent style={{
                    marginLeft: "7.5vw"
                }}>
                    <DrawerCloseButton />
                    <DrawerHeader>Custom style</DrawerHeader>

                    <DrawerBody>
                        <Component handleChange={handleChange} />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>

    )
}

export default Settings;