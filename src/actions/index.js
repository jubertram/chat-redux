// TODO: add and export your own actions
const fetchMessagesType = 'FETCH_MESSAGES';

export default function fetchMessages(channel) {
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
    .then(response => response.json());

  return {
    type: fetchMessagesType,
    payload: promise
  };
}
