import { Heading, HStack, Text, VStack } from "@chakra-ui/react"
import Icon from "./Icon"

export default function Logo() {

    return (
        <HStack alignItems={'center'}>
            <Icon />
            <VStack gap={0}>
                <Heading size='xl' fontWeight={'400'} fontFamily={'fasthand'}>
                    Blog
                </Heading>
                <Heading size='md' fontWeight={'400'}>
                    Posts
                </Heading>
            </VStack>
        </HStack>
    )
}