'use client'
import CloudIcon from "@/components/CloudIcon"
import { Button, CloseButton, FormLabel, Heading, HStack, Input, Text, Textarea, VStack } from "@chakra-ui/react"
import { useState } from "react"

export default function Page() {
    const [textContent, setTextContent] = useState('')

    return (
        <VStack
            w={'100%'}
        >
            <VStack
                shadow={'0 0 6px gray'}
                my={10}
                p={10}
                borderRadius={6}
                alignItems={'start'}
                color={'#6B7280'}
                gap={4}
            >
                <HStack
                    w={'100%'}
                    justifyContent={'space-between'}
                >
                    <Heading
                        size={'md'}
                        color={'#111827'}
                    >
                        Create Blog Post
                    </Heading>
                    <CloseButton />
                </HStack>
                <Text
                    fontWeight={'400'}
                >
                    Enter your blog details here. Click save when you&apos;re done.
                </Text>
                <FormLabel
                    htmlFor="title"
                    color={'gray.600'}
                >
                    Blog Title
                </FormLabel>
                <Input
                    id="title"
                    placeholder="Harry Potter"
                    type="text"
                />
                <FormLabel
                    htmlFor="date"
                    color={'gray.600'}
                >
                    Date
                </FormLabel>
                <Input
                    type="date"
                    id="slug"
                    placeholder="harrypotter"
                />
                <FormLabel
                    htmlFor="slug"
                    color={'gray.600'}
                >
                    Slug
                </FormLabel>
                <Input
                    id="title"
                    placeholder="Harry Potter"
                    type="text"
                />
                <Text>
                    Image
                </Text>
                <VStack
                    border={'1px dashed black'}
                    borderRadius={4}
                    p={8}
                    gap={10}
                >
                    <CloudIcon />
                    <Text>
                        Please upload images in 100x100 pixels, in either PNG or JPEG format.
                    </Text>
                    <Button
                        bgColor="#012B55"
                        color={'white'}
                    >
                        Browse Files
                    </Button>
                </VStack>
                <FormLabel
                    htmlFor="content"
                    color={'gray.600'}
                >
                    Content
                </FormLabel>
                <Textarea
                    id="content"
                    placeholder="Text"
                    value={textContent}
                    onChange={(e) => textContent.length < 100 && e.target.value.length < 100 && setTextContent(e.target.value)}
                />
                <Text
                    alignSelf={'end'}
                >
                    {textContent.length}/100
                </Text>
                <Button
                        bgColor="gray"
                        color={'white'}
                        alignSelf={'end'}
                    >
                        Save Changes
                    </Button>
            </VStack>
        </VStack>
    )
}