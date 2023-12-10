'use client';
import {Button} from "@/components";
import {Paragraph} from "@/components";
import {Tag} from "@/components";
import {Card} from "@/components";
import {Rating} from "@/components";
import {Like} from "@/components";
import {useEffect, useState} from "react";
import {log} from "util";

export default function Home() {
  const POST_URL = 'https://jsonplaceholder.typicode.com/posts/1'; // 1 for example

  const [rating, setRating] = useState<number>(4);
  const [click, setClick] = useState<boolean>(false);
  const [like, setLike] = useState<boolean>(false);

  console.log(!like ? 'post disliked' : 'post liked'); // check the updating state

  const likeThePost = async () => {
    try {
      const res = await fetch(POST_URL, {method: 'PATCH'});

      if (res.ok) {
        setLike(prev => !prev);
        setClick(prev => !prev);

      } else {
        throw new Error('Failed to like the post');
      }
    } catch (e) {
      window.alert('Something went wrong, try it later please');
      console.error('Something went wrong, try it later please');
    }
  };

  useEffect(() => {
    if (click) {
      likeThePost();
    }
  }, [click]);

  return (
    <main>
      <Button appearance='primary' arrow='right'>Button</Button>
      <Button appearance='ghost' arrow='down'>Button</Button>
      <Paragraph size='large'>Large paragraph</Paragraph>
      <Tag color='green' size='small'>Small Tag</Tag>
      <Card
        text='Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы, и небольших элементов пользовательского интерфейса. Эта статья даёт общее представление о грид-раскладке и новой терминологии, которая является частью спецификации CSS Grid Layout Level 1. Более подробно показанные возможности будут описаны описаны далее в руководстве.'
        title='Как работать с CSS Grid'
        date='1 month ago'
        topic='Front-end'/>
      <Rating rating={rating} isEditable={true} setRating={setRating}/>
      <Like liked={like} location='page' onClick={() => setClick(prev => !prev)}/>
    </main>
  );
}
