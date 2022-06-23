export type widgetPropsType =
  | 'user'
  | 'widgets'
  | 'user'
  | 'order'
  | 'earning'
  | 'balance';

interface WidgetData {
  title: string;
  isMoney?: boolean;
  linkLabel?: string;
  icon?: JSX.Element;
}
