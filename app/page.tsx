'use client'
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Separator,
  Text,
  VStack,
} from '@chakra-ui/react'

const Home = () => (
  <Container maxW='container.lg' p={4} color='white' bg='gray.900'>
    {/* Navbar */}
    <Flex as='nav' justifyContent='space-around' p={4} bg='gray.800' borderRadius='lg'>
      <Button colorScheme='whiteAlpha'>Notre mission</Button>
      <Button colorScheme='whiteAlpha'>Boutique</Button>
      <Button colorScheme='whiteAlpha'>Cat sitting</Button>
      <Button colorScheme='whiteAlpha'>Cat Alert</Button>
      <Button colorScheme='whiteAlpha'>Blog</Button>
      <Button colorScheme='whiteAlpha'>Nous rejoindre</Button>
    </Flex>

    <Box p={4} mt={8} textAlign='center'>
      {/* Mission Section */}
      <Heading size='lg' mb={4}>
        Notre mission
      </Heading>
      <Text fontSize='lg' mb={4}>
        Nous sommes Céline et Livio, deux passionnées des mini panthères rassemblés autour du
        sauvetage de Merguez, un chat errant qui nous tient à coeur. Céline déjà engagé dans des
        associations de capture et soin des chats fabriquant des objets et proposant des services
        autour du chat dans le but de faire des dons, et Livio ayant plutôt des compétences
        digitales, nous nous sommes demandés comment nous pourrions sensibiliser et inciter encore
        davantage les dons pour aider les minous en mauvaise posture.
      </Text>
      <Text fontSize='lg' mb={8}>
        En effet, nous pensons qu'en comparaison à ce qu'il pourrait être, il n'y a pas assez de
        don, mais nous croyons également que c'est parce qu'il n'y a pas assez d'opportunité qui
        sont posées.
      </Text>
      <Text fontSize='lg' mb={8}>
        Ce n'est pas pareil de faire un don de 200 CHF ou 4.95 CHF par mois. Et, c'est bête à dire
        mais si chaque personne en suisse faisons à sa portée de 1 CHF, les 8 millions de CHF
        couvrirait 25000 soins (par exemple le chat perchés prennent en charge XX chats par an)
      </Text>

      <Separator borderColor='gray.600' mb={8} />

      {/* Timeline Section */}
      <Heading size='md' mb={4}>
        Plan de développement
      </Heading>
      <VStack gap={8} align='start'>
        <HStack gap={4} align='start'>
          <Box boxSize={4} bg='white' borderRadius='full' />
          <Text fontSize='lg'>
            <strong>Début 2025</strong>: Vendre des services et objets afin de distribuer les
            bénéfices aux associations qui aident les chats.
          </Text>
        </HStack>
        <HStack gap={4} align='start'>
          <Box boxSize={4} bg='white' borderRadius='full' />
          <Text fontSize='lg'>
            <strong>Mi 2025</strong>: Faire des partenariats avec les associations de capture et
            soin des chats pour alimenter le blog, outil de sensibilisation aux besoins de notre
            mission.
          </Text>
        </HStack>
        <HStack gap={4} align='start'>
          <Box boxSize={4} bg='white' borderRadius='full' />
          <Text fontSize='lg'>
            <strong>Mi 2025</strong>: Proposer une app mobile de recherche de cat sitting
            géolocalisée gratuite, mais encourageant les dons en guise de reconnaissance.
          </Text>
        </HStack>
        <HStack gap={4} align='start'>
          <Box boxSize={4} bg='white' borderRadius='full' />
          <Text fontSize='lg'>
            <strong>2026</strong>: Proposer une app mobile dans le but de remplacer Pet Alert Vaud,
            permettant de rechercher un chat en utilisant la caméra et favorisant les dons.
          </Text>
        </HStack>
      </VStack>
    </Box>
  </Container>
)
export default Home
