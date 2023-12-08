import {Htag} from "@/components";
import {Button} from "@/components";
import {Paragraph} from "@/components";
import {Tag} from "@/components";
import {Card} from "@/components";

export default function Home() {
  return (
    <main>
      <Htag tag='h3'>Hello</Htag>
      <Button appearance='primary' arrow='right'>Button</Button>
      <Button appearance='ghost' arrow='down'>Button</Button>
      <Paragraph size='large'>Large paragraph</Paragraph>
      <Tag color='green' size='small'>Small Tag</Tag>
      <Card
        text='Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы, и небольших элементов пользовательского интерфейса. Эта статья даёт общее представление о грид-раскладке и новой терминологии, которая является частью спецификации CSS Grid Layout Level 1. Более подробно показанные возможности будут описаны описаны далее в руководстве.'
        title='Как работать с CSS Grid'
        date='1 month ago'
        topic='Front-end'/>
    </main>
  );
}
