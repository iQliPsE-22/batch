import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
};

const Button = (props: ButtonProps) => {
  return (
    <div>
      <button className="px-4 py-2 text-white bg-black rounded-sm w-48 h-14 flex items-center justify-center">
        {props.children}
      </button>
    </div>
  );
};

export default Button;
