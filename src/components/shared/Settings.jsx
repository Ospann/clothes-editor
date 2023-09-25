import { Box, Heading, Input, Slider, SliderTrack, SliderFilledTrack, SliderThumb } from "@chakra-ui/react";

const Settings = ({ handleChange }) => {

    return (
        <Box w="30%" h="100%" padding="4" display="flex" flexDirection="column" gap="2rem" border="1px solid #e6e6e6">
            <Box className="setting-block">
                <Heading size='md'>Clothes color</Heading>
                <Box display="flex" h="12" gap="1rem">
                    <Box onClick={() => handleChange("clother_color", "red")} className="colorButton" backgroundColor="red" />
                    <Box onClick={() => handleChange("clother_color", "black")} className="colorButton" backgroundColor="black" />
                    <Box onClick={() => handleChange("clother_color", "white")} className="colorButton" backgroundColor="white" />
                    <Box onClick={() => handleChange("clother_color", "blue")} className="colorButton" backgroundColor="blue" />
                </Box>
            </Box>
            <Box className="setting-block">
                <Heading size='md'>Photo</Heading>
                <Input type="file" />
            </Box>
            <Box className="setting-block">
                <Heading size='md'>Text</Heading>
                <Input placeholder="Your Text" onChange={(e) => handleChange("text", e.target.value)} />
            </Box>
            <Box className="setting-block">
                <Heading size='md'>Size of text</Heading>
                <Slider size="lg" aria-label='slider-ex-1' defaultValue={30} onChange={(val) => handleChange("text_size", val)}>
                    <SliderTrack>
                        <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                </Slider>
            </Box>
            <Box className="setting-block">
                <Heading size='md'>Text color</Heading>
                <Box display="flex" h="12" gap="1rem">
                    <Box onClick={() => handleChange("text_color", "red")} className="colorButton" backgroundColor="red" />
                    <Box onClick={() => handleChange("text_color", "black")} className="colorButton" backgroundColor="black" />
                    <Box onClick={() => handleChange("text_color", "white")} className="colorButton" backgroundColor="white" />
                    <Box onClick={() => handleChange("text_color", "blue")} className="colorButton" backgroundColor="blue" />
                    <Box onClick={() => handleChange("text_color", "gray")} className="colorButton" backgroundColor="gray" />
                </Box>
            </Box>
        </Box>
    )
}

export default Settings;