import FamilyMember from "./FamilyMember";

export default (props) => {
  return (
    <div>
      <FamilyMember name="Diogo" family={props.family} />
      <FamilyMember name="Mayara" {...props} />
      <FamilyMember name="Eli" family={props.family} />
    </div>
  );
};
