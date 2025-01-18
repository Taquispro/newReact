function MediaCard(props) {
  console.log(props.name);
  return (
    <div>
      <h1>Name : {props.name}</h1>
      <h1>Rollno : {props.rollNo}</h1>
      <h2>Marks : {props.marks[0]}</h2>
      <h3>Subjects : {JSON.stringify(props.subjects)}</h3>
    </div>
  );
}

export default MediaCard;
