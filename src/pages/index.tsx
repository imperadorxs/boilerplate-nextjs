type Props = {
  title: string;
};

export default function Home({ title = 'React Avançado' }: Props) {
  return (
    <div>
      <h1>Hello Boilerplate</h1>
    </div>
  );
}