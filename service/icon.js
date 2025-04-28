import { DynamicIcon } from 'lucide-react/dynamic';

const Icon = ({ iconName, size = 20, iconColor = '#fff', ...props }) => {
  return (
    <DynamicIcon {...props} name={iconName} color={iconColor} size={size} />
  );
};

export default Icon;
