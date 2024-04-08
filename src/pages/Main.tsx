import {
    Box,
    SimpleGrid,
    Flex,
    Image,
    useColorModeValue,
    Text,
    Button,
    HStack,
    Icon,
    VStack,
    Grid,
    StackDivider
} from '@chakra-ui/react'

import { useState } from 'react'

import { DownloadIcon } from '@chakra-ui/icons'
import { FaLinkedin, FaGithub, FaJava, FaHtml5, FaPhp, FaReact, FaFigma, FaBootstrap, FaNodeJs, FaDocker} from "react-icons/fa";
import { FaGolang, FaUnity } from "react-icons/fa6"
import { SiGodotengine, SiChakraui, SiExpress, SiGmail, SiMariadb, SiMysql, SiNumpy, SiPandas, SiPostgresql, SiPrisma, SiPython, SiSqlite, SiTypescript } from "react-icons/si"
import { BiLogoCPlusPlus } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";

const Main: React.FC = () => {
    
    // Colors
    const profileBorder = useColorModeValue('black', 'white');
    const cardBackground = useColorModeValue('rgba(0, 0, 128, 0.5)', 'rgba(255, 255, 255, 0.5)');
    const cardText = useColorModeValue('white', 'black');
    const linkedlnColor = useColorModeValue("blue.500", "white");
    const linkedlnBGColor = useColorModeValue("white", "blue.500");
    const divider = useColorModeValue('black', 'white');

    // Variables for additiona functions
    const [hoverLinkedln, setHoverLinkedln] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isHoveredProj2, setIsHoveredProj2] = useState(false);
    const [isHoveredProj3, setIsHoveredProj3] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [isTransitioningProj2, setIsTransitioningProj2] = useState(true);
    const [isTransitioningProj3, setIsTransitioningProj3] = useState(true);
    // Additional Functions
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
    return(
        <Flex
            wrap="wrap"
            gap="2"
            flexDirection="column"
            alignItems="center"
            p={{base: "5px", md: "10px", lg: "15px"}}
            id='profile'
        >
            <Box bg="transparent">
                {/* Border */}
                <Box
                    borderRadius="50%"
                    boxSize='300px'
                    transform="translate(-50%, -50%)"
                    position="absolute"
                    mt="220px"
                    alignItems="center"
                    backgroundColor="rgba(0, 0, 255, 0.1)" // Light blue with opacity
                    zIndex="-1" // Ensure the circle is behind the image
                    border='5px solid'
                    borderColor={profileBorder}
                />
                {/* End of Border */}
                {/* Profile Image */}
                <Box
                    boxSize='300px'
                    mt='220px'
                    transform="translate(-50%, -50%)"
                    position="absolute"
                    alignItems="center" 
                >
                    <Image
                    opacity="50%"
                    borderRadius='full'
                    boxSize='100%' 
                    src='/img/Profile.JPG'
                    border='4px solid'
                    borderColor={profileBorder}
                    objectFit='cover' 
                    />
                </Box>
                {/* End of Profile Image  */}
            </Box>
            { /* Second Component */ }
            <Box
                mt="370px"
                alignItems="center"
            >
                {/* Text Components */}
                <Flex
                    flexDirection="column"
                    alignItems="center"
                    // left={{base: "33%", md: "80%", lg: "75%"}}
                    // top={{base: "80%", md: "40%", lg: "40%"}}
                >
                    <Text
                        fontFamily="system-ui"
                        align="center"
                        // right={{base: "80%", md:"50%"}}
                        // top={{base: "40%"}}
                        // mr={{base: "35%", md: "0%", lg: "0%"}}
                        // mb={{base: "0%", md: "0%", lg: "30%"}}
                    >
                        Kenneth Dave
                    </Text>
                    <Text
                        fontFamily="system-ui"
                        alignItems="center"
                    >
                        Undergraduate Engineering Student, Majoring in Informatics
                    </Text>
                    <a 
                        href="https://drive.google.com/file/d/1KYcJOJ8wrlvhzFarc_7DzBiSIzWee5gY/view?usp=sharing" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                    <Button
                        // left={{base: "7%", md: "0%", lg: "0%"}}
                        // width = {{base: "55%", md: "90%", lg: "60%"}}
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
                        alignItems="center"
                        mt="50px"
                        id='socials'
                    >
                        Socials
                    </Text>
                    <HStack
                        p="10px"    
                    >
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
            </Box>
            {/*Skills  */}
            <VStack
                // bottom="0" // Position new components at the bottom of the Flex container
                mt="50px"
                id='skills'
            >
                <Text
                    mb={{base: "5px", md: "5px", lg: "10px"}}
                >
                    Skills
                </Text>
                {/* Merge rows */}
                <Grid
                    columnGap={4}
                    rowGap={3}
                    templateColumns="repeat(6, 1fr)"
                >
                <VStack>
                    <a><Icon as={FaUnity} boxSize={7}/></a>
                    <Text>Unity</Text>
                </VStack>
                <VStack>
                    <a><Icon as={SiGodotengine} boxSize={7}/></a>
                    <Text>Godot</Text>
                </VStack>
                
                <VStack>
                    <a><Icon as={SiPython} boxSize={7}/></a>
                    <Text>Python</Text>
                </VStack>

                <VStack>
                    <a><Icon as={BiLogoCPlusPlus} boxSize={7}/></a>
                    <Text>C++</Text>
                </VStack>

                <VStack>
                    <a><Icon as={FaJava} boxSize={7}/></a>
                    <Text>Java</Text>
                </VStack>

                <VStack>
                    <a><Icon as={FaHtml5} boxSize={7}/></a>
                    <Text>HTML5</Text>
                </VStack>

                <VStack>
                    <a><Icon as={IoLogoJavascript} boxSize={7}/></a>
                    <Text>JavaScript</Text>
                </VStack>

                <VStack>
                    <a><Icon as={FaPhp} boxSize={7}/></a>
                    <Text>PHP</Text>
                </VStack>

                <VStack>
                    <a><Icon as={FaReact} boxSize={7}/></a>
                    <Text>React</Text>
                </VStack>

                <VStack>
                    <a><Icon as={TbBrandNextjs} boxSize={7}/></a>
                    <Text>NextJS</Text>
                </VStack>

                <VStack>
                    <a><Icon as={FaFigma} boxSize={7}/></a>
                    <Text>Figma</Text>
                </VStack>

                <VStack>
                    <a><Icon as={SiPandas} boxSize={7}/></a>
                    <Text>Pandas</Text>
                </VStack>

                <VStack>
                    <a><Icon as={FaBootstrap} boxSize={7}/></a>
                    <Text>Bootstrap</Text>
                </VStack>

                <VStack>
                    <a><Icon as={FaNodeJs} boxSize={7}/></a>
                    <Text>NodeJS</Text>
                </VStack>

                <VStack>
                    <a><Icon as={SiExpress} boxSize={7}/></a>
                    <Text>ExpressJS</Text>
                </VStack>

                <VStack>
                    <a><Icon as={FaGolang} boxSize={7}/></a>
                    <Text>Golang</Text>
                </VStack>

                <VStack>
                    <a><Icon as={SiMysql} boxSize={7}/></a>
                    <Text>MySQL</Text>
                </VStack>
                <VStack>
                    <a><Icon as={SiMariadb} boxSize={7}/></a>
                    <Text>MariaDB</Text>
                </VStack>
                <VStack>
                    <a><Icon as={SiPostgresql} boxSize={7}/></a>
                    <Text>PostgreSQL</Text>
                </VStack>
                <VStack>
                    <a><Icon as={SiSqlite} boxSize={7}/></a>
                    <Text>SQLite</Text>
                </VStack>
                <VStack>
                    <a><Icon as={SiTypescript} boxSize={7}/></a>
                    <Text>TypeScript</Text>
                </VStack>
                <VStack>
                    <a><Icon as={SiPrisma} boxSize={7}/></a>
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
            {/*End of Skills  */}

            { /* Projects */}
            <VStack
                divider={<StackDivider borderColor={divider} />}
                spacing={10}
                align='stretch'
                justifyContent="center" // Center horizontally
                alignItems="center" // Center vertically
                mt="50px"
                id='projects'
            > <Text>Projects</Text>
                {/* New Components Here */}
                {/* First Project */}
                <HStack 
                    bg={cardBackground}
                    height='300px'           
                    width={{base: isTransitioning ? '300px' : '100%', md: isTransitioning ? '300px' : '100%', lg: isTransitioning ? '300px' : '100%'}}
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
                        background='rgba(56, 76, 39, 1)' 
                        src='/img/Lottereum.png'
                        border='4px solid'
                        transition='opacity 0.3s ease-in-out'
                        // width={{base: "100%", md: "100%", lg: "100%"}}
                    />
                    <Text
                        opacity={isTransitioning ? '0%' : '100%'}
                        transition={`opacity ${isTransitioning ? '0s' : '0.4s'} ease-in-out`}
                        color='white'
                    >
                        Website React yang menggunakan fullstack NextJS dan blockchain canister backend menggunakan Azle.
                        <br />
                        <a 
                            href="https://github.com/kenndave/web3-lottery-system"
                            style={{ color: 'blue', textDecoration: 'underline' }}
                        >
                            Click Me!
                        </a>
                    </Text>
                </HStack>
                {/* Second project */}
                <HStack
                    bg={cardBackground} 
                    width={{base: isTransitioningProj2 ? '300px' : '100%', md: isTransitioningProj2 ? '300px' : '100%', lg: isTransitioningProj2 ? '300px' : '100%'}}
                    transition='width 0.4s ease-in-out' // Adding transition for smooth effect
                    onMouseEnter={() => handleMouseEnter(2)}
                    onMouseLeave={() => handleMouseLeave(2)}
                >
                {/* Project Image */}
                <Image
                    boxSize='300px' 
                    src='/img/The_Fall_of_Robots.png'
                    bg={cardBackground}
                    border='4px solid'
                    transition='opacity 0.3s ease-in-out'
                />
                <Text
                    opacity={isTransitioningProj2 ? '0%' : '100%'}
                    transition={`opacity ${isTransitioning ? '0s' : '0.4s'} ease-in-out`}
                    color='white'
                >   
                    "The Fall of Robots" - Top-Down Action 2D Game Berbasis Unity
                    <br />
                    <a 
                        href='https://kenndave.itch.io/the-fall-of-robots'
                        style={{ color: 'blue', textDecoration: 'underline' }}
                    >
                        Click Me!
                    </a>
                </Text>
                </HStack>
                {/* Third project */}
          </VStack>
        </Flex>
    );
}

export default Main;