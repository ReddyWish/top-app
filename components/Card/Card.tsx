import {CardProps} from "@/components/Card/Card.props";
import styles from './Card.module.css';
import {Like} from "@/components";
import {Title} from "@/components";
import {Text} from "@/components";
import Image from "next/image";

export const Card = ({ topic, date, title, text }: CardProps): JSX.Element => {
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
           {/*<div className={styles.topic}>{topic}</div>*/}
           <Text size='xs' className={styles.topic}>{topic}</Text>
           <div>&#183;</div>
           {/*<div className={styles.date}>{date}</div>*/}
           <Text size='xs' className={styles.date}>{date}</Text>
         </div>
         <div className={styles.like}>
           <Like amount='4'/>
         </div>
       </div>
       <Title size='small'>{title}</Title>
       <Text size='s' className={styles.text}>{text}</Text>
     </div>

     <div className={styles.footer}>
       <Text size='xs' className={styles.duration}>3 minutes</Text>
       {/*<div className={styles.read}>Read</div>*/}
       <button className={styles.button}>Read →</button>
     </div>
   </div>
 );
};
