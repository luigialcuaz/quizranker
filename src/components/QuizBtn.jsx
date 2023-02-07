import { Link } from "react-router-dom";

export default function QuizBtn(props) {
  return (
    <Link
      id={props.id}
      className={props.className}
      to={`/${props.path}`}
      onClick={props.handleClick ? props.handleClick : undefined}
    >
      {props.text}
    </Link>
  );
}
