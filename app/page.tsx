'use client'
import { Box, Button, Heading, HStack, Text, VStack } from "@chakra-ui/react"
import { Post, posts } from "./data/blogData"
import { useEffect, useState } from "react"
import PostCard from "@/components/PostCard"

export default function Home() {
  const [blogPosts, setBlogPosts] = useState<Post[]>([])
  const [numPages, setNumPages] = useState(0)
  const pageSize = 6
  const [currentPage, setCurrentPage] = useState(0)

  const getPosts = (): Post[] => {
    return posts
  }

  useEffect(() => {
    const fetchedPosts = getPosts()
    setBlogPosts(fetchedPosts)
    const pages = Math.floor(fetchedPosts.length / pageSize)
    setNumPages(pages)
  }, [])

  const startIndex = pageSize * currentPage
  const lastIndex = startIndex + pageSize
  const currentPosts = blogPosts.slice(startIndex, lastIndex)


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
          {currentPosts.map((post) => {
            const index = blogPosts.indexOf(post)
            const slug = post.title.split(' ').join('-')
            return <PostCard key={index} slug={slug} {...post} />
          })}
        </HStack>
        <HStack
          my={10}
        >
          <Button
            fontSize={32}
            onClick={() => setCurrentPage((formerCurrentPage) => (
              0 < formerCurrentPage ?  
              formerCurrentPage - 1 : currentPage
            ))}
          >
            &lsaquo;
          </Button>
          {
            // generates range by flattening an iterator for an empty array of desired length
            Array.from(Array(numPages).keys()).map(index => (
              <Button
                key={Number(index)}
                bgColor={currentPage == index ? '#012B55' : ''}
                color={currentPage == index ? 'white' : ''}
                onClick={() => setCurrentPage(index)}
              >
                {index + 1}
              </Button>
            ))
          }
          <Button
            fontSize={32}
            onClick={() => setCurrentPage((formerCurrentPage) => (
              formerCurrentPage < numPages - 1 ?  
              formerCurrentPage + 1 : currentPage
            ))}
          >
            &rsaquo;
          </Button>
        </HStack>
      </VStack>
    </main>
  )
}
