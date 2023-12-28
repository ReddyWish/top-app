import { Metadata } from 'next';
import {getPost, getPosts} from "@/api/post";
import {PostPage} from "@/components";
import {notFound} from "next/navigation";


export const metadata: Metadata = {
  title: "Post"
};

export async function generateStaticParams() {
  const posts = await getPosts();
  if (!posts) {
    return [];
  }
  const postsWithIdString = posts.map((post) => ({ ...post, id: post.id.toString() }));
  return postsWithIdString.map((post) => ({ id: post.id }));
}

export default async function Page({ params }: { params: { id: string }}) {
  const post = await getPost(params.id);
  if (!post) {
    notFound();
  }
  return (
    <>
      <PostPage post={post}/>
    </>
  );
}