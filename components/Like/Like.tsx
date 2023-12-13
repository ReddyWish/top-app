import {LikeProps} from "@/components/Like/Like.props";
import styles from './Like.module.css';
import LikeIcon from './like.svg';
import cn from 'classnames';

export const Like = ({location, liked = false, className, ...props}: LikeProps): JSX.Element => {
  return (
    <button className={cn(styles.like, className, {
      [styles.liked]: liked && location == 'page',
      [styles.disliked]: liked == false && location == 'page',
      [styles.page]: location == 'page',
      [styles.card]: location == 'card',
    })}
            {...props}
    >
      <LikeIcon/>
    </button>
  );
};
