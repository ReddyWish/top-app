import {CardProps} from "@/components/Card/Card.props";
import styles from './Card.module.css';
import {Like} from "@/components";
import {Title} from "@/components";
import {Text} from "@/components";
import Image from "next/image";
import Link from "next/link";

export const Card = ({topic = 'frontend', date = '1 month ago', title, body, id}: CardProps): JSX.Element => {

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image
          fill
          alt='image'
          src="vercel.svg"
        />
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.topicAndDate}>
            <Text size='xs' className={styles.topic}>{topic}</Text>
            <div>&#183;</div>
            <Text size='xs' className={styles.date}>{date}</Text>
          </div>
          <div className={styles.like}>
            <Text size='xs'>4</Text>
            <Like location="card"/>
          </div>
        </div>
        <Title size='small' className={styles.title}>{title}</Title>
        <Text size='s' className={styles.text}>{body}</Text>
      </div>

      <div className={styles.footer}>
        <Text size='xs' className={styles.duration}>3 minutes</Text>
        <button className={styles.button}>
          <Link href={`posts/${id}`}>Read →</Link>
        </button>
      </div>
    </div>
  );
};
