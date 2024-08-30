'use client'
import { Box, Button, HStack, Input, Text } from "@chakra-ui/react"
import Logo from "../Logo"
import Link from "next/link"
import CreateBlogPostButton from "./CreateBlogPostButton"
import SearchBar from "./SearchBar"

export default function NavBar() {

    return (
        <nav>
            <HStack
                bgColor={'#D9D9D9'}
                px={14}
                py={2}
                w={'100%'}
                justifyContent={'space-between'}
                display={{ base: 'none', lg: 'flex' }}
            >
                <Logo />
                <HStack
                    gap={6}
                >
                    <Link
                        href={'/blog'}
                    >
                        <Text fontWeight={'500'}>
                            Blogs
                        </Text>
                    </Link>
                    <SearchBar />
                    <CreateBlogPostButton />
                </HStack>
            </HStack>
        </nav>
    )
}
