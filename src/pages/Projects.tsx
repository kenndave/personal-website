import { 
    Box, 
    Image,
    Text,
    Flex,
    Button,
    useColorModeValue,
    VStack,
    StackDivider, 
    Center,
    HStack
  } from '@chakra-ui/react'
  import React, { useState } from 'react';

const Projects: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isHoveredProj2, setIsHoveredProj2] = useState(false);
    const [isHoveredProj3, setIsHoveredProj3] = useState(false);
    return (
        <VStack
            divider={<StackDivider borderColor='gray.200' />}
            spacing={7}
            align='stretch'
            marginLeft="10%"
            marginRight="10%"
            marginTop="15%"
            justifyContent="center" // Center horizontally
            alignItems="center" // Center vertically
            height="100vh" // Take full height of the viewport
            // overflowY="auto" // Make the VStack scrollable
        >   {/*First Project */}
            <HStack 
                bg='yellow.200'
                width='24%'
                transition='width 0.4s ease-in-out' // Adding transition for smooth effect
                _hover={{ width: '100%', opacity: '75%' }} // Changing width on hover
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)} 
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
                    opacity={isHovered ? '100%' : '0%'}
                    transition='opacity 0.3s ease-in-out'
                >
                Ini ntar harus debug dlu
                </Text>
            </HStack>
            {/*Second project */}
            <HStack
                bg='yellow.200'
                width='24%'
                transition='width 0.3s ease-in-out' // Adding transition for smooth effect
                _hover={{ width: '100%', opacity: '75%' }} // Changing width on hover
                onMouseEnter={() => setIsHoveredProj2(true)}
                onMouseLeave={() => setIsHoveredProj2(false)} 
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
                    opacity={isHoveredProj2 ? '100%' : '0%'}
                    transition='opacity 0.3s ease-in-out'
                >
                Ini ntar harus debug dlu
                </Text>
            </HStack>
            {/* Third project */}
            <HStack 
                bg='yellow.200'
                width='24%'
                transition='width 0.3s ease-in-out' // Adding transition for smooth effect
                _hover={{ width: '100%', opacity: '75%' }} // Changing width on hover
                onMouseEnter={() => setIsHoveredProj3(true)}
                onMouseLeave={() => setIsHoveredProj3(false)} 
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
                    opacity={isHoveredProj3 ? '100%' : '0%'}
                    transition='opacity 0.3s ease-in-out'
                >
                Ini ntar harus debug dlu
                </Text>
            </HStack>
        </VStack>
    );
}

export default Projects;