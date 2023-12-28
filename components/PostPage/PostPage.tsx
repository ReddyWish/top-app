import styles from './PostPage.module.css';
import {Post} from "@/interfaces/post.interface";

export const PostPage = ({ post }: { post: Post }): JSX.Element => {
  return (
    <div className={styles.card}>
      post with ID {post.id}
    </div>
  );
};
