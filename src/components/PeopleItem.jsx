export default function PeopleItem(item) {
  const { name, age, id } = item;
  return (
    <div>
      {id}. {name}: {age}
    </div>
  );
}
