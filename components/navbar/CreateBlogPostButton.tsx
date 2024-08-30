import { Button } from "@chakra-ui/react"
import Link from "next/link"

export default function CreateBlogPostButton() {
    return (
        <Link href={'/posts/create'}>
            <Button
                fontFamily={'poppins'}
                bgColor='#8E8E8E'
                color={'white'}
            >
                Create Blog Post
            </Button>
        </Link>
    )
}