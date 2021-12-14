import { Button, Htag, P, Rating } from "../components";
import { Tag } from "../components/Tag/Tag";

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag="h1">Text</Htag>
      <Button appearance="primary" arrow="right">
        Кнопка
      </Button>
      <Button appearance="ghost">Кнопка</Button>
      <P size="l">Большой</P>
      <P>Средний</P>
      <P size="s">Маленький</P>
      <Tag size="s">Маленький</Tag>
      <Tag size="m" color="red">
        Большой
      </Tag>
      <Rating rating={4} isEditable />
    </div>
  );
}
