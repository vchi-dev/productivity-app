import { useColorMode } from '@chakra-ui/color-mode';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Flex, Stack, Center } from '@chakra-ui/layout';
import { Text, Input, InputGroup, InputLeftElement, Switch, FormLabel } from '@chakra-ui/react';
import React from 'react';
import { Cloud } from '@mui/icons-material';

function Info() {
  const { colorMode } = useColorMode();
  const darkMode = colorMode === "dark";

  const [query, setQuery] = React.useState('')
  const [savedQuery, setSavedQuery] = React.useState('')
  const handleSearch = (event) => {
    setQuery(event.target.value)
  }

  const [weather, setWeather] = React.useState('')
  const [temperature, setTemperature] = React.useState('00')
  const [scale, setScale] = React.useState('C')
  const weatherApi = {
    key: "bad7b680058eadb2d456582593ec1fc2",
    base: "https://api.openweathermap.org/data/2.5/"
  }
  const searchWeather = (event) => {
    if (event.key === "Enter") {
      setSavedQuery(query);
      if (scale === "C") {
        fetch(`${weatherApi.base}weather?q=${query}&units=metric&APPID=${weatherApi.key}`).then(res => res.json()).then(result => {
          setQuery('');
          setWeather(result.weather[0].main);
          setTemperature(result.main.temp);
        });
      }
      else {
        fetch(`${weatherApi.base}weather?q=${query}&units=imperial&APPID=${weatherApi.key}`).then(res => res.json()).then(result => {
          setQuery('');
          setWeather(result.weather[0].main);
          setTemperature(result.main.temp);
        });
      }
    }
  }
  const handleScale = () => {
    if (scale === "C") {
      fetch(`${weatherApi.base}weather?q=${savedQuery}&units=imperial&APPID=${weatherApi.key}`).then(res => res.json()).then(result => {
        setWeather(result.weather[0].main);
        setTemperature(result.main.temp);
      });
      setScale("F")
    }
    else {
      fetch(`${weatherApi.base}weather?q=${savedQuery}&units=metric&APPID=${weatherApi.key}`).then(res => res.json()).then(result => {
        setWeather(result.weather[0].main);
        setTemperature(result.main.temp);
      });
      setScale("C")
    }
  }

  const breakpoints = {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  }

  return (
    <Stack>
      <Flex>
        <Center w={[150,200,350,450,600]}>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<Cloud />}
            />
            <Input value={query} onChange={handleSearch} onKeyDown={searchWeather} placeholder='Input City...' />
          </InputGroup>
        </Center>
        <Center ml={[0,0,3,4]} w={50}>
          <Text fontSize={["sm","md","lg"]}>{(weather !== '') ? Math.round(temperature)+"°"+scale : "--°"+scale}</Text>
        </Center>
        <Center ml={[-3,2,4,6]} w={65}>
          <Text fontSize={["sm","md","lg"]}>{(weather !== '') ? weather : "Empty"}</Text>
        </Center>
        <Center ml={[-6,0,2,4]} mr={[-10,0]} w={160}>
          <FormLabel htmlFor='isChecked' mt={2} fontSize={["sm","md","lg"]}>Fahrenheit:</FormLabel>
          <Switch size={"md"} onChange={handleScale}></Switch>
        </Center>
        {/* <Text fontSize="3xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text">Weather</Text> */}
      </Flex>
    </Stack>
  )
}

export default Info