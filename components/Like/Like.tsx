import {LikeProps} from "@/components/Like/Like.props";
import styles from './Like.module.css';
import LikeIcon from './like.svg';

export const Like = ({amount}: LikeProps): JSX.Element => {
  return (
    <div className={styles.like}>
     <div>{amount}</div>
     <LikeIcon/>
    </div>
  );
};
