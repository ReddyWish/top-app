import {Htag} from "@/components";
import {Button} from "@/components";
import {Paragraph} from "@/components";
import {Tag} from "@/components";

export default function Home() {
  return (
    <main>
      <Htag tag='h3'>Hello</Htag>
      <Button appearance='primary' arrow='right'>Button</Button>
      <Button appearance='ghost' arrow='down'>Button</Button>
      <Paragraph size='large'>Large paragraph</Paragraph>
      <Tag color='green' size='small'>Small Tag</Tag>
    </main>
  );
}
