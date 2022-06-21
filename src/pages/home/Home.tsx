import { Widget } from '../../components/widget/Widget';
import './home.scss';

export const Home = () => {
  return (
    <div className="homeContainer">
      <div className="widgets">
        <Widget type="user" />
        <Widget type="order" />
        <Widget type="earning" />
        <Widget type="balance" />
      </div>
    </div>
  );
};
