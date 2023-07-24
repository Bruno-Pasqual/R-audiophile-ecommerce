/* eslint-disable react/prop-types */
const Button = ({
  color = 'black',
  background = 'transparent',
  text = 'See product',
  border = '1px solid black',
}) => {
  const button_style = {
    width: '160px',
    height: '48px',
    background: background,
    color: color,
    fontSize: '13px',
    fontWeight: 700,
    letterSpacing: '1px',
    textTransform: 'uppercase',
    border: border,
  };

  return <button style={button_style}>{text}</button>;
};

export default Button;
