
import HighlightText, { HighlightTextProps } from './HighlightText';

type HighlightNumberProps = {} & Omit<HighlightTextProps, 'pattern'>;

const pattern = /\d+/g;
const HighlightNumber = (props: HighlightNumberProps) => {
  const { style = {}, ...rest } = props;
  return (
    <HighlightText
      {...rest}
      pattern={pattern}
      style={{
        fontSize: '18px',
        fontWeight: 'bold',
        ...style
      }}
    />
  );
};

export default HighlightNumber;