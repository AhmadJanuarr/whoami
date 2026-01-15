import { getAllPosts } from "@/lib/mdx"
import BlogClient from "src/components/blogs/BlogClient"

export default function BlogPage() {
  const posts = getAllPosts()

  return <BlogClient initialPosts={posts} />
}
