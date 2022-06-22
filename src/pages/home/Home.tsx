import { Chart } from '../../components/chart/Chart';
import { Featured } from '../../components/featured/Featured';
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

      <div className="charts">
        <Featured />
        <Chart title="Last 6 Months (Revenue)" aspect={3 / 1} />
      </div>
    </div>
  );
};
