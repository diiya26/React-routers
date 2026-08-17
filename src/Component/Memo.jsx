import{memo} from "react";

function Student({ name }) {
  console.log("Student rendered");
  return (
    <div>
      <h2>Student Name: {name}</h2>
    </div>
  );
}
export default memo(Student);
