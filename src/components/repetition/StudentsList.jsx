import students from "../../data/students";

const studentsList = (props) => {
  const studentsLi = students.map((student) => {
    return (
      <li key={student.id}>
        {student.id}) {student.name} {"->"} {student.grade}
      </li>
    );
  });
  return (
    <div>
      <ul style={{ listStyle: "none" }}>{studentsLi}</ul>
    </div>
  );
};

export default studentsList;
