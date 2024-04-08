import { 
  Box, 
  Image,
  Text,
  Flex,
  Button,
  useColorModeValue,
  HStack,
  VStack,
  StackDivider,
  Icon,
  Grid
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import { DownloadIcon } from '@chakra-ui/icons'
import { FaLinkedin, FaGithub, FaJava, FaHtml5, FaPhp, FaReact, FaFigma, FaBootstrap, FaNodeJs, FaDocker} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6"
import { SiChakraui, SiExpress, SiGmail, SiMariadb, SiMysql, SiNumpy, SiPandas, SiPostgresql, SiPrisma, SiPython, SiSqlite, SiTypescript } from "react-icons/si"
import { BiLogoCPlusPlus } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";

const Homepage: React.FC = () => {
  const [hoverLinkedln, setHoverLinkedln] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredProj2, setIsHoveredProj2] = useState(false);
  const [isHoveredProj3, setIsHoveredProj3] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isTransitioningProj2, setIsTransitioningProj2] = useState(true);
  const [isTransitioningProj3, setIsTransitioningProj3] = useState(true);

  // Icons
  const linkedlnColor = useColorModeValue("blue.500", "white");
  const linkedlnBGColor = useColorModeValue("white", "blue.500");

  // Colors
  const profileBorder = useColorModeValue('black', 'white');
  const divider = useColorModeValue('black', 'white');
  const handleMouseEnter = (projectNumber: number) => {
    switch (projectNumber) {
      case 1:
        setIsHovered(true);
        setIsTransitioning(false);
        break;
      case 2:
        setIsHoveredProj2(true);
        setIsTransitioningProj2(false);
        break;
      case 3:
        setIsHoveredProj3(true);
        setIsTransitioningProj3(false);
        break;
      default:
        break;
    }
  };
  
  const handleMouseLeave = (projectNumber: number) => {
    switch (projectNumber) {
      case 1:
        setIsHovered(false);
        setTimeout(() => {
          setIsTransitioning(true);
        }, 1000);
        setIsTransitioning(false);
        break;
      case 2:
        setIsHoveredProj2(false);
        setTimeout(() => {
          setIsTransitioningProj2(true);
        }, 1000);
        setIsTransitioningProj2(false);
        break;
      case 3:
        setIsHoveredProj3(false);
        setTimeout(() => {
          setIsTransitioningProj3(true);
        }, 1000);
        setIsTransitioningProj3(false);
        break;
      default:
        break;
    }
  };

      return (
        <Flex
          justify="center"
          alignItems="center"
          h="100vh"
          marginRight={{ base: "5%", md: "10%", lg: "7.5%" }}
          marginLeft={{ base: "5%", md: "10%", lg: "15%" }}
          position="relative" // Add relative positioning to the parent container
        >
          {/* Border */}
          <Box
            position="absolute"
            // left="50%"
            // top="50%"
            // transform="translate(-50%, -50%)"
            top={{base: "20%", md: "24%",  lg: "24%"}}
            ml={{base: "5%", md: "0%", lg: "0%"}}
            borderRadius="50%"
            width="400px"
            height="400px"
            backgroundColor="rgba(0, 0, 255, 0.1)" // Light blue with opacity
            zIndex="-1" // Ensure the circle is behind the image
            border='5px solid'
            borderColor={profileBorder}
          />
          
          {/* Profile Image */}
          <Box 
            position="absolute"
            top={{base: "27%", md: "30%",  lg: "30%"}}
            ml={{base: "5%", md: "0%", lg: "0%"}}
          >
            <Image
              opacity="50%"
              borderRadius='full'
              boxSize='300px' 
              src='https://bit.ly/dan-abramov'
              alt='Dan Abramov'
              border='4px solid'
              borderColor={profileBorder} 
            />
          </Box>

          {/* Text Components */}
          <Flex
            flexDirection="column"
            position="absolute"
            left={{base: "33%", md: "80%", lg: "75%"}}
            top={{base: "80%", md: "40%", lg: "40%"}}
          >
            <Text
              fontFamily="system-ui"
              align={{base: "center", md: "left", lg: "left"}}
              right={{base: "80%", md:"50%"}}
              top={{base: "40%"}}
              mr={{base: "35%", md: "0%", lg: "0%"}}
              // mb={{base: "0%", md: "0%", lg: "30%"}}
            >
              Kenneth Dave
            </Text>
            <Text
              fontFamily="system-ui"
              align={{base: "center", md: "left", lg: "left"}}
              right={{base: "1%", md:"50%"}}
              mr={{base: "35%", md: "0%", lg: "0%"}}
            >
              Undergraduate Engineering Student, Majoring in Informatics
            </Text>
            <a 
              href="https://drive.google.com/file/d/1KYcJOJ8wrlvhzFarc_7DzBiSIzWee5gY/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button
                left={{base: "7%", md: "0%", lg: "0%"}}
                width = {{base: "50%", md: "90%", lg: "60%"}}
                fontFamily="system-ui"
              >
                <DownloadIcon 
                  mr="5px"
                  // onMouseEnter={() => setHoverLinkedln(true)}
                  // onMouseLeave={() => setHoverLinkedln(false)}
                  // style={{ display: "inline-block", transform: hoverLinkedln ? "scale(1.2)" : "scale(1)" }}
                > 
                </DownloadIcon>
                  Download CV
              </Button>
            </a>
            {/* Socials */}
            <Text
              align={{base: "center", md: "left", lg: "left"}}
              mr={{base: "35%", md: "0%", lg: "0%"}}
              mt={{base: "10%", md: "5%", lg: "5%"}}
              mb={{base: "5%", md: "5%", lg: "5%"}}
            >
              Socials: 
            </Text>
            <HStack>
              <a href="mailto:dave.bahana@gmail.com" target="_blank" rel="noopener noreferrer">
                <Icon 
                  as={SiGmail}
                  boxSize={7}
                />
              </a>
              <a href="https://www.linkedin.com/in/kenneth-dave-655438217" target="_blank" rel="noopener noreferrer">
                <Icon 
                  as={FaLinkedin} 
                  boxSize={7} 
                  color={linkedlnColor} 
                  bg={linkedlnBGColor} 
                  borderColor={linkedlnBGColor} 
                />
              </a>
              <a href="https://github.com/kenndave" target="_blank" rel="noopener noreferrer">
                <Icon 
                 as={FaGithub} 
                 boxSize={7}
                />
              </a>
            </HStack>
          </Flex>
          {/*Skills  */}
          <VStack
            top={{base: "100%", md: "60%", lg: "65%"}}
            ml={{base: "5%", md: "10%", lg: "0%"}}
            mr={{base: "0%", md: "0%", lg: "0%"}}
            // ml={{base: "5%", md: "0%", lg: "0%"}}
            left={{base: "auto", md: "10%", lg: "37.5%"}}
            mb={{base: "5%", md: "5%", lg: "5%"}}
            justifyContent="center" // Center horizontally
            alignItems="center" // Center vertically
            height="100vh" // Take full height of the viewport
            position="absolute" // Position new components absolutely within the Flex container
            // bottom="0" // Position new components at the bottom of the Flex container
          >
            <Text
            mb={{base: "5px", md: "5px", lg: "10px"}}
            >Skills</Text>
            {/* Merge rows */}
            <Grid
              columnGap={4}
              rowGap={3}
              templateColumns="repeat(6, 1fr)"
            >
              <VStack>
                <a>
                  <Icon
                    as={SiPython}
                    boxSize={7} 
                  />
                </a>
                <Text>Python</Text>
              </VStack>

              <VStack>
                <a>
                  <Icon
                    as={BiLogoCPlusPlus}
                    boxSize={7} 
                  />
                </a>
                <Text>C++</Text>
              </VStack>

              <VStack>
                <a>
                  <Icon
                    as={FaJava}
                    boxSize={7} 
                  />
                </a>
                <Text>Java</Text>
              </VStack>

              <VStack>
                <a>
                  <Icon
                    as={FaHtml5}
                    boxSize={7} 
                  />
                </a>
                <Text>HTML5</Text>
              </VStack>

              <VStack>
                <a>
                  <Icon
                    as={IoLogoJavascript}
                    boxSize={7} 
                  />
                </a>
                <Text>JavaScript</Text>
              </VStack>

              <VStack>
                <a>
                  <Icon
                    as={FaPhp}
                    boxSize={7} 
                  />
                </a>
                <Text>PHP</Text>
              </VStack>

              <VStack>
                <a>
                  <Icon
                    as={FaReact}
                    boxSize={7} 
                  />
                </a>
                <Text>React</Text>
              </VStack>

              <VStack>
                <a>
                  <Icon
                    as={TbBrandNextjs}
                    boxSize={7} 
                  />
                </a>
                <Text>NextJS</Text>
              </VStack>

              <VStack>
                <a>
                  <Icon
                    as={FaFigma}
                    boxSize={7} 
                  />
                </a>
                <Text>Figma</Text>
              </VStack>

              <VStack>
                <a>
                  <Icon
                    as={SiPandas}
                    boxSize={7} 
                  />
                </a>
                <Text>Pandas</Text>
              </VStack>

              <VStack>
                <a>
                  <Icon
                    as={FaBootstrap}
                    boxSize={7} 
                  />
                </a>
                <Text>Bootstrap</Text>
              </VStack>

              <VStack>
                <a>
                  <Icon
                    as={FaNodeJs}
                    boxSize={7} 
                  />
                </a>
                <Text>NodeJS</Text>
              </VStack>

              <VStack>
                <a>
                  <Icon
                    as={SiExpress}
                    boxSize={7} 
                  />
                </a>
                <Text>ExpressJS</Text>
              </VStack>

              <VStack>
                <a>
                  <Icon
                    as={FaGolang}
                    boxSize={7} 
                  />
                </a>
                <Text>Golang</Text>
              </VStack>

              <VStack>
                <a>
                  <Icon
                    as={SiMysql}
                    boxSize={7} 
                  />
                </a>
                <Text>MySQL</Text>
              </VStack>
              <VStack>
                <a>
                  <Icon
                    as={SiMariadb}
                    boxSize={7} 
                  />
                </a>
                <Text>MariaDB</Text>
              </VStack>
              <VStack>
                <a>
                  <Icon
                    as={SiPostgresql}
                    boxSize={7} 
                  />
                </a>
                <Text>PostgreSQL</Text>
              </VStack>
              <VStack>
                <a>
                  <Icon
                    as={SiSqlite}
                    boxSize={7} 
                  />
                </a>
                <Text>SQLite</Text>
              </VStack>
              <VStack>
                <a>
                  <Icon
                    as={SiTypescript}
                    boxSize={7} 
                  />
                </a>
                <Text>TypeScript</Text>
              </VStack>
              <VStack>
                <a>
                  <Icon
                    as={SiPrisma}
                    boxSize={7} 
                  />
                </a>
                <Text>Prisma</Text>
              </VStack>
              <VStack>
                <a>
                  <Icon
                    as={SiNumpy}
                    boxSize={7} 
                  />
                </a>
                <Text>NumPy</Text>
              </VStack>
              <VStack>
                <a>
                  <Icon
                    as={FaDocker}
                    boxSize={7} 
                  />
                </a>
                <Text>Docker</Text>
              </VStack>
              <VStack>
                <a>
                  <Icon
                    as={SiChakraui}
                    boxSize={7} 
                  />
                </a>
                <Text>ChakraUI</Text>
              </VStack>
            </Grid>
 
          </VStack>
          {/* Projects */}
          <VStack
            divider={<StackDivider borderColor={divider} />}
            spacing={10}
            align='stretch'
            ml={{base: "3%", md: "5%",lg: "10%"}}
            mr={{base: "0%", md: "0%",lg: "10%"}}
            mt={{base: "15%", md: "0%",lg: "20%"}}
            justifyContent="center" // Center horizontally
            alignItems="center" // Center vertically
            height="100vh" // Take full height of the viewport
            position="absolute" // Position new components absolutely within the Flex container
            bottom="0" // Position new components at the bottom of the Flex container
            left="50%" // Center horizontally
            top={{base: "210%", md: "200%", lg: "160%"}}
            transform="translateX(-50%)" // Center the VStack
          > <Text>Projects</Text>
            {/* New Components Here */}
            {/* First Project */}
            <HStack 
              bg='yellow.200'            
              width={{base: isTransitioning ? '88%' : '250%', md: isTransitioning ? '76%' : '200%', lg: isTransitioning ? '78%' : '200%'}}
              opacity={{base: isTransitioning ? '75%' : '100%', lg: isTransitioning ? '75%' : '100%'}}
              transition='width 0.4s ease-in-out' // Adding transition for smooth effect
              // _hover={{
              //   base: {width: "250%"},
              //   md: {width: "200%"},
              //   lg: {width: "200%"}
              // }}
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={() => handleMouseLeave(1)}
            >
              {/* Project Image */}
              <Image
                boxSize='300px' 
                src='https://bit.ly/dan-abramov'
                alt='Dan Abramov'
                border='4px solid'
                transition='opacity 0.3s ease-in-out'
                // width={{base: "100%", md: "100%", lg: "100%"}}
              />
              <Text
                opacity={isTransitioning ? '0%' : '100%'}
                transition='opacity 0.3s ease-in-out'
              >
              Ini ntar harus debug dlu
              </Text>
            </HStack>
            {/* Second project */}
            <HStack
              bg='yellow.200'
              width={{base: isTransitioningProj2 ? '88%' : '250%', md: isTransitioningProj2 ? '76%' : '200%', lg: isTransitioningProj2 ? '78%' : '200%'}}
              opacity={{base: isTransitioningProj2 ? '75%' : '100%', lg: isTransitioningProj2 ? '75%' : '100%'}}
              transition='width 0.4s ease-in-out' // Adding transition for smooth effect
              // _hover={{ width: '200%'}} // Changing width on hover
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={() => handleMouseLeave(2)}
            >
              {/* Project Image */}
              <Image
                boxSize='300px' 
                src='https://bit.ly/dan-abramov'
                alt='Dan Abramov'
                border='4px solid'
                transition='opacity 0.3s ease-in-out'
              />
              <Text
                opacity={isTransitioningProj2 ? '0%' : '100%'}
                transition='opacity 0.3s ease-in-out'
              >
              Ini ntar harus debug dlu
              </Text>
            </HStack>
            {/* Third project */}
            <HStack 
              bg='yellow.200'
              width={{base: isTransitioningProj3 ? '88%' : '250%', md: isTransitioningProj3 ? '76%' : '200%', lg: isTransitioningProj3 ? '78%' : '200%'}}
              opacity={{base: isTransitioningProj3 ? '75%' : '100%', lg: isTransitioningProj3 ? '75%' : '100%'}}
              transition='width 0.4s ease-in-out' // Adding transition for smooth effect
              // _hover={{ width: '200%'}} // Changing width on hover
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={() => handleMouseLeave(3)}
            >
              {/* Project Image */}
              <Image
                boxSize='300px' 
                src='https://bit.ly/dan-abramov'
                alt='Dan Abramov'
                border='4px solid'
                transition='opacity 0.3s ease-in-out'
              />
              <Text
                opacity={isTransitioningProj3 ? '0%' : '100%'}
                transition='opacity 0.3s ease-in-out'
              >
              Ini ntar harus debug dlu
              </Text>
            </HStack>
            <Text></Text>
          </VStack>
          
        </Flex>
      );
}

export default Homepage;



