'use client'
import { Box, HStack, Text, VStack } from "@chakra-ui/react"
import Logo from "../Logo"
import SearchBar from "./SearchBar"
import Icon from "../Icon"
import { useState } from "react"
import Link from "next/link"
import CreateBlogPostButton from "./CreateBlogPostButton"

export default function NavBarMobile() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav>
            <VStack
                bgColor={'#D9D9D9'}
                display={{ base: 'flex', lg: 'none' }}
                py={2}
                px={8}
            >
                <HStack
                    justifyContent={'space-between'}
                    w={'100%'}
                >
                    <SearchBar />
                    <Box
                        onClick={() => setIsOpen((prevState) => !prevState)}
                        cursor={'pointer'}
                    >
                        <Icon size={30} />
                    </Box>
                </HStack>
                <VStack
                    w={'100%'}
                    alignItems={'end'}
                    display={ isOpen ? 'flex' : 'none'}
                >
                    <Link
                        href={'/'}
                    >
                        <Text fontWeight={'500'}>
                            Home
                        </Text>
                    </Link>
                    <Link
                        href={'/blog'}
                    >
                        <Text fontWeight={'500'}>
                            Blogs
                        </Text>
                    </Link>
                    <CreateBlogPostButton />
                </VStack>
            </VStack>
        </nav>
    )
}