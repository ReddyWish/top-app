import {Post} from '@/interfaces/post.interface';
import {API} from '@/api';
import {Card} from "@/components";

export async function getPosts(): Promise<Post[] | null> {
  const res = await fetch(API.posts.getPosts);
  if (!res.ok) {
    return null;
  }
  const content = await res.json();
  return content.map((post, index) => {
    return <Card body={post.body} id={post.id} title={post.title} userId={post.userId}/>;
  });
}


{/*<Card*/}
{/*  body='Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы, и небольших элементов пользовательского интерфейса. Эта статья даёт общее представление о грид-раскладке и новой терминологии, которая является частью спецификации CSS Grid Layout Level 1. Более подробно показанные возможности будут описаны описаны далее в руководстве.'*/}
{/*  title='Как работать с CSS Grid'*/}
{/*  date='1 month ago'*/}
{/*  topic='Front-end'/>*/}