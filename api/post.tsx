import {API} from '@/api';
import {Post} from "@/interfaces/post.interface";

export async function getPosts(): Promise<Post[] | null> {
  const res = await fetch(API.posts.getPosts);
  if (!res.ok) {
    return null;
  }
  const posts = await res.json();
  return posts;
}

export async function getPost(id: string): Promise<Post | null> {
  const res = await fetch(`${API.posts.getPosts}/${id}`);
  if (!res.ok) {
    return null;
  }
  const post = await res.json();
  return post;
}