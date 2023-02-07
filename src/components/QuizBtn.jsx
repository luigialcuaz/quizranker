import { Link } from "react-router-dom";

export default function QuizBtn(props) {
  return (
    <Link className={props.className} to={`/${props.redirect}`}>
      {props.text}
    </Link>
  );
}
