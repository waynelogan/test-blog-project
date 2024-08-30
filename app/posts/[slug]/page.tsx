'use client'
import { Post, posts } from "@/app/data/blogData"
import Banner from "@/components/Banner"
import BannerLarge from "@/components/BannerLarge"
import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function SinglePostPage({ params: { slug } }: { params: { slug: string } }) {
    const [post, setPost] = useState<Post>()
    const getPost = (slug: string): Post => {
        const title = slug.split('-').join(' ')
        const searchedPost = posts.filter(post => post.title == title)[0]
        return searchedPost
    }

    useEffect(() => {
        const searchedPost = getPost(slug)
        setPost(searchedPost)
    }, [slug])

    return (
        <VStack
            w={'100%'}
            px={14}
            alignItems={'start'}
        >
            <Link href={'/'}>
                <HStack
                    my={4}
                >
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14 5C14 4.72386 13.7761 4.5 13.5 4.5L1.70711 4.5L4.85355 1.35355C5.04882 1.15829 5.04882 0.841708 4.85355 0.646446C4.65829 0.451183 4.34171 0.451183 4.14645 0.646446L0.146446 4.64645C-0.0488157 4.84171 -0.0488157 5.15829 0.146446 5.35355L4.14645 9.35355C4.34171 9.54882 4.65829 9.54882 4.85355 9.35355C5.04882 9.15829 5.04882 8.84171 4.85355 8.64645L1.70711 5.5L13.5 5.5C13.7761 5.5 14 5.27614 14 5Z" fill="black" />
                    </svg>
                    <Text>
                        Back to blog posts
                    </Text>
                </HStack>
            </Link>
            <VStack
                mx={10}
            >
                <Heading>
                    {post?.title}
                </Heading>
                <Text>
                    {post?.date} &middot; {post?.readingTime}
                </Text>
                <Box my={6} display={{ base: 'none', md: 'block' }}>
                    <BannerLarge scale={0.9} />
                </Box>
                <Box my={6} display={{ base: 'block', md: 'none' }}>
                    <Banner scale={0.7} />
                </Box>
                <Text
                    mb={10}
                >
                    {post?.content}
                </Text>
            </VStack>
        </VStack>
    )
}