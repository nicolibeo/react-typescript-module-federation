export const Button:React.FunctionComponent<{ onClick: () => void}> = ({ children, onClick }) => {
  return (
    <button onClick={onClick}>{children}</button>
  );
};
