const random = (props) => {
  const { min, max } = props;
  const random = parseInt(Math.random() * (max - min) + min);
  return (
    <div>
      <h2>Random Value</h2>
      <p>
        <strong>Min Value: </strong> {min}
      </p>
      <p>
        <strong>Max Value: </strong> {max}
      </p>
      <p>
        <strong>Draw Value: </strong> {random}
      </p>
    </div>
  );
};

export default random;
