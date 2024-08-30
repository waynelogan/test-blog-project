import { HStack, Text } from "@chakra-ui/react"
import Logo from "./Logo"

export default function Footer () {
   
   return (
       <footer>
        <HStack 
            bgColor={'#d9d9d9'}
            px={14}
            py={2}
            mt={10}
            justifyContent={'space-between'}
        >
            <Logo />
            <Text>
                Copyright &copy; 2023 . BlogPost
            </Text>
        </HStack>
       </footer>
   )
}