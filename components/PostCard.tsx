import { Post } from "@/app/data/blogData"
import { Heading, Text, VStack } from "@chakra-ui/react"
import Banner from "./Banner"
import Link from "next/link"

interface CardProps extends Post {
    slug: string
}

export default function PostCard({ title, date, readingTime, content, slug }: CardProps) {

    return (
        <Link href={`/posts/${slug}`}>
            <VStack
                w={'min-content'}
                bgColor={'#e8e8e8'}
            >
                <Banner scale={0.8} />
                <VStack
                    p={4}
                >
                    <Text
                        w={'100%'}
                    >
                        {date} &middot; {readingTime}
                    </Text>
                    <Heading
                        size={'md'}
                        w={'100%'}
                    >
                        {title}
                    </Heading>
                    <Text
                        noOfLines={3}
                    >
                        {content}
                    </Text>
                </VStack>
            </VStack>
        </Link>
    )
}