'use client'
import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/react"
import { Post, posts } from "@/app/data/blogData"
import { useEffect, useState } from "react"
import PostCard from "@/components/PostCard"
import SearchBar from "@/components/navbar/SearchBar"
import Link from "next/link"

export default function Blog() {
    const [blogPosts, setBlogPosts] = useState<Post[]>([])
    const [search, setSearch] = useState('')

    const filteredPosts = blogPosts.filter(post => 
        post.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        post.content.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    )

    const getPosts = (): Post[] => {
        return posts
    }

    useEffect(() => {
        const fetchedPosts = getPosts()
        setBlogPosts(fetchedPosts)
    }, [])


    return (
        <main>
            <VStack
                w={'100%'}
                px={14}
                alignItems={'start'}
                gap={10}
                mt={10}
            >
                <Link href={'/'}>
                    <HStack
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
                    w={'100%'}
                    px={14}
                    py={4}
                    gap={10}
                >
                    <Heading>
                        Search Blogs
                    </Heading>
                    <SearchBar width={320} setSearch={setSearch} />
                </VStack>
                <HStack
                    mx={14}
                    justifyContent={'space-between'}
                    gap={20}
                    flexWrap={'wrap'}
                >
                    {filteredPosts.map((post) => {
                        const index = blogPosts.indexOf(post)
                        const slug = post.title.split(' ').join('-')
                        return <PostCard key={index} slug={slug} {...post} />
                    })}
                </HStack>
            </VStack>
        </main>
    )
}
