const Text = ({ number, name }) => {
  console.log(number, "numberString");
  return (
    <div>
      {name} {number}
    </div>
  );
};

export default Text;
