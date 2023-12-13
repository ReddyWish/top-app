import styles from './page.module.css';
import {getPosts} from "@/api/post";

export default async function Home() {
  const posts = await getPosts();
  return (
    <main className={styles.main}>
      {posts}
    </main>
  );
}
