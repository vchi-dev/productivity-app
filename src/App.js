import { IconButton } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { VStack, Flex, Heading, Spacer, Center, Text } from '@chakra-ui/layout';
import { DarkMode, GitHub, LightMode, LinkedIn, Work } from '@mui/icons-material';
import Info from './components/Info.js';
import Task from './components/Task.js';
import Music from './components/Music.js';
import { useMediaQuery } from '@chakra-ui/media-query';

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
  const [largerScreen] = useMediaQuery("(min-width:600px)");

  function currentTime() {
    var currentDate = new Date();
    return currentDate.toLocaleTimeString();
  }
  window.onload = function initClock() {
		currentTime();
		window.setInterval(function () { currentTime(); }, 1000);
	}

  return (
    <div className="App">
      <VStack p={[3,4,5]}>
        <Flex w="100%">
          <Heading ml={[0,2,10]} fontSize={["lg","xl","2xl"]} fontWeight="bold" bgGradient="linear(to-r, cyan.300, blue.400, purple.400)" bgClip="text">Productivity App</Heading>
          <Spacer></Spacer>
          <IconButton ml="2" icon={<Work />} isRound="true" onClick={openPortfolio}></IconButton>
          <IconButton ml="2" icon={<GitHub />} isRound="true" onClick={openGitHub}></IconButton>
          <IconButton ml="2" icon={<LinkedIn />} isRound="true" onClick={openLinkedIn}></IconButton>
          <IconButton ml={[2,2,10]} mr={[0,2,10]} icon={darkMode ? <DarkMode /> : <LightMode />} isRound="true" onClick={toggleColorMode}></IconButton>
        </Flex>
        <Flex direction={largerScreen ? "row" : "column"}>
          <Info></Info>
          <Center>
            <Text>{currentTime()}</Text>
          </Center>
        </Flex>
        <Task></Task>
        <Music></Music>
      </VStack>
    </div>
  );
}

export default App;
