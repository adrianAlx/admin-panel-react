import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

import './widget.scss';
import { WidgetData, widgetPropsType } from './interfaces';

interface WidgetProps {
  type: widgetPropsType;
}

export const Widget = ({ type }: WidgetProps) => {
  let widgetData: WidgetData = { title: '' };

  // Temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case 'user':
      widgetData = {
        title: 'USERS',
        isMoney: false,
        linkLabel: 'See all users',
        icon: <PersonOutlinedIcon className="icon user" />,
      };
      break;

    case 'order':
      widgetData = {
        title: 'ORDERS',
        isMoney: false,
        linkLabel: 'View all orders',
        icon: <ShoppingCartOutlinedIcon className="icon order" />,
      };
      break;

    case 'earning':
      widgetData = {
        title: 'EARNING',
        isMoney: true,
        linkLabel: 'View net earnings',
        icon: <MonetizationOnOutlinedIcon className="icon earning" />,
      };
      break;

    case 'balance':
      widgetData = {
        title: 'BALANCE',
        isMoney: true,
        linkLabel: 'See details',
        icon: <AccountBalanceWalletOutlinedIcon className="icon balance" />,
      };
      break;

    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{widgetData.title}</span>
        <span className="counter">
          {widgetData.isMoney && '$'} {amount}
        </span>
        <span className="link">{widgetData.linkLabel}</span>
      </div>

      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff}%
        </div>
        {widgetData.icon}
      </div>
    </div>
  );
};
