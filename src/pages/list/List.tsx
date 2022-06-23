import { Datatable } from '../../components/datatable/Datatable';
import './list.scss';

export const List = () => {
  return (
    <div className="list">
      <div className="listContainer">
        <Datatable />
      </div>
    </div>
  );
};
