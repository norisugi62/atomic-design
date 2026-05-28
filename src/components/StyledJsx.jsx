const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">- styled-jsx -</p>
        <button className="button">FIGHT!!</button>
      </div>
      <style jsx={'true'}>
        {`
          .container {
            border: 2px solid #392eff;
            border-radius: 20px;
            padding: 8px;
            margin: 8px;
            display: flex;
            justify-content: space-around;
            align-items: center;
          }

          .title {
            color: green;
            margin: 0;
          }

          .button {
            background-color: red;
            border: none;
            padding: 8px;
            border-radius: 8px;
            color: black;
          }

          .button:hover {
            color: #fff;
            background-color: #392eff;
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
};

export default StyledJsx;
