interface ArrowDownProps {
  className?: string;
}

const ArrowDown: React.FC<ArrowDownProps> = ({ className }) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className ?? ""}
  >
    <path
      d="M10.1623 13.6616L13.184 16.6832C13.2919 16.7914 13.4201 16.8772 13.5612 16.9357C13.7024 16.9943 13.8537 17.0244 14.0065 17.0244C14.1593 17.0244 14.3106 16.9943 14.4517 16.9357C14.5928 16.8772 14.721 16.7914 14.829 16.6832L17.8506 13.6616C18.5856 12.9266 18.0606 11.6666 17.0223 11.6666H10.979C9.94063 11.6666 9.4273 12.9266 10.1623 13.6616Z"
      fill="white"
    />
  </svg>
);

export default ArrowDown;
