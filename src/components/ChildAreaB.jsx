import { useState, memo } from 'react';

const ChildAreaB = memo(() => {
  const [open, setOpen] = useState(false);
  const onclickButton = () => setOpen((prevOpen) => !prevOpen);
  console.log('ChildAreaB');
  return (
    <div>
      <button onClick={onclickButton}>あいさつ</button>
      {open && <p>こんにちは</p>}
    </div>
  );
});

export default ChildAreaB;
