const containerStyle = {
  border: '2px solid #392eff',
  borderRadius: '20px',
  padding: '8px',
  margin: '8px',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
};

const InlineStyles = () => {
  const buttonStyle = {
    backgroundColor: '#abedd8',
    border: 'none',
    padding: '8px',
    borderRadius: '8px',
    color: 'black',
  };
  return (
    <div style={containerStyle}>
      <p style={{ color: '#3d84a8', margin: 0 }}>- Inline Styles -</p>
      <button style={buttonStyle}>FIGHT!!</button>
    </div>
  );
};

export default InlineStyles;
