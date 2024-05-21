export interface CardJsonProps {
  id: number;
  title: string;
  subTitle: string;
  borderColor: string;
  content: CardContentProps[];
}

export interface CardContentProps {
  title: string;
  description: string;
  image: string;
}
