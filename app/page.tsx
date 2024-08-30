'use client'
import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/react"
import { Post, posts } from "./data/blogData"
import { useEffect, useState } from "react"
import PostCard from "@/components/PostCard"

export default function Home() {
  const [blogPosts, setBlogPosts] = useState<Post[]>([])

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
      >
        <VStack
          w={'100%'}
          px={14}
          py={4}
          alignItems={{ base: 'center', lg: 'start' }}
        >
          <Heading>
            The Accessibility Blog
          </Heading>
          <Text>
            The voice of the excluded
          </Text>
        </VStack>
        <HStack
          mx={14}
          justifyContent={'space-between'}
          gap={20}
          flexWrap={'wrap'}
        >
          {blogPosts.map((post) => {
            const index = blogPosts.indexOf(post)
            const slug = post.title.split(' ').join('-')
            return <PostCard key={index} slug={slug} {...post} />
          })}
        </HStack>
      </VStack>
    </main>
  )
}
