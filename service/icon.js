import { DynamicIcon } from 'lucide-react/dynamic';

const Icon = ({ iconName, size = 20, color = '#fff', ...props }) => {
  return <DynamicIcon {...props} name={iconName} color={color} size={size} />;
};

export default Icon;
