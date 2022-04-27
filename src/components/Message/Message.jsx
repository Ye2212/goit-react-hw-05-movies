import propTypes from 'prop-types';
import { Text } from './Message.styled';

function Message({ text }) {
  return <Text>{text}</Text>;
}

Message.propTypes = {
  text: propTypes.string.isRequired,
};
export default Message;
