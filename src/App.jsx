import Settings from "./components/shared/Settings"
import Display from "./components/shared/Display"
import { Box } from "@chakra-ui/react"
import { useState } from "react"

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
      w='100%'
      display="flex"
      justifyContent="space-between"
    >
      <Display {...settings} />
      <Settings handleChange={handleChange} />
    </Box>
  )
}

export default App
