import PeopleItem from "./PeopleItem";

export default function PeopleList({ data }) {
  const items = data;

  return (
    <div>
      {items.map((item) => {
        return <PeopleItem key={item.id} {...item} />;
      })}
    </div>
  );
}
