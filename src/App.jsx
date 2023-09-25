// import Settings from "./components/shared/Settings"
import Display from "./components/shared/Display"
import { Box } from "@chakra-ui/react"
import { useState } from "react"
import Settings from "./components/shared/Setting";
function App() {

  const [settings, setSettings] = useState({
    clother_color: "black",
    text: "Your Text",
    text_color: "white",
    text_size: "30",
    image: "",
  });

  const handleChange = (key, val) => {
    setSettings(prevSettings => ({
      ...prevSettings,
      [key]: val,
    }));
  }

  return (
    <Box
      h='100vh'
      w='100%'
      alignItems="center"
      display="flex"
      justifyContent="space-between"
    >
      <Settings handleChange={handleChange} />
      <Display {...settings} />
    </Box>
  )
}

export default App
