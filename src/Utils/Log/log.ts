export interface Log {
  text: string;
}

const log = ({ text }: Log): void => {
  // eslint-disable-next-line no-console
  console.log(text);
};

export default log;
