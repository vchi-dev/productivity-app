import { IconButton } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { VStack, Flex, Heading, Spacer, Center, Text } from '@chakra-ui/layout';
import { Editable, EditablePreview, EditableTextarea } from '@chakra-ui/editable';
import { DarkMode, GitHub, LightMode, LinkedIn, Work } from '@mui/icons-material';
import Info from './components/Info.js';
import Task from './components/Task.js';

function App() {
  const {colorMode, toggleColorMode} = useColorMode();
  const darkMode = colorMode === "dark";

  function openPortfolio() {
    window.open("https://vchi-dev.github.io/");
  }
  function openGitHub() {
    window.open("https://github.com/vchi-dev");
  }
  function openLinkedIn() {
    window.open("https://www.linkedin.com/in/vincent-chi-developer/");
  }

  const breakpoints = {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  }

  function time(){
    var currentDate = new Date();
    var currentTime = currentDate.toLocaleTimeString();
    document.getElementById("time").innerHTML = currentTime;
  }
  setInterval(time, 1000);

  return (
    <div className="App">
      <VStack p={[3,4,5]}>
        <Flex w="100%">
          <Heading ml={[0,2,10]} fontSize={["lg","xl","2xl"]} fontWeight="bold" bgGradient={darkMode ? "linear(to-r, green.400, cyan.400, purple.400)" : "linear(to-r, orange.500, pink.500, red.500)"} bgClip="text">Productivity App</Heading>
          <Spacer></Spacer>
          <IconButton ml="2" icon={<Work />} isRound="true" onClick={openPortfolio}></IconButton>
          <IconButton ml="2" icon={<GitHub />} isRound="true" onClick={openGitHub}></IconButton>
          <IconButton ml="2" icon={<LinkedIn />} isRound="true" onClick={openLinkedIn}></IconButton>
          <IconButton ml={[2,2,10]} mr={[0,2,10]} icon={darkMode ? <DarkMode /> : <LightMode />} isRound="true" onClick={toggleColorMode}></IconButton>
        </Flex>
        <Flex>
          <Info></Info>
          <Center ml={[0,2,2,6]} w={110} bgGradient={darkMode ? "linear(to-r, green.500, cyan.700)" : "linear(to-r, orange.300, pink.300)"} borderRadius={20}>
            <Text id="time" fontSize={["sm","md","lg"]} fontWeight="semibold">--:--:-- AM</Text>
          </Center>
        </Flex>
        <br />
        <Task></Task>
        <Editable p={3} borderRadius={20} bgGradient={darkMode ? "linear(to-r, green.500, cyan.700)" : "linear(to-r, orange.300, pink.300)"} textAlign="center" defaultValue='Note: This is not saved!'>
          <EditablePreview width={[300,400,500,650,800]} height={400}/>
          <EditableTextarea width={[300,400,500,650,800]} height={400}/>
        </Editable>
      </VStack>
    </div>
  );
}

export default App;
