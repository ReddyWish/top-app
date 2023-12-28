import styles from './page.module.css';
import {getPosts} from "@/api/post";
import {Post} from "@/interfaces/post.interface";
import React from "react";
import {Card} from "@/components";

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className={styles.main}>
      {posts?.map((post: Post, index: number) => {
        return <Card key={index} body={post.body} id={post.id} title={post.title} userId={post.userId}/>;
      })}
    </main>
  );
}
