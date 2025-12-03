import { getAllPosts } from "@/lib/mdx"
import BlogClient from "src/app/components/blogs/BlogClient"

export default function BlogPage() {
  const posts = getAllPosts()

  return <BlogClient initialPosts={posts} />
}
