import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faXTwitter, faFacebookF , faSnapchat , faWhatsapp } from '@fortawesome/free-brands-svg-icons';

type props = {
  iconName: string;
  className?: string;
};

type iconMap = {
  [key: string]: IconDefinition;
};

export const DynamicIcon = ({ iconName , className }: props) => {
  const iconMap: iconMap = {
    twitter: faXTwitter,
    facebook: faFacebookF,
    whatsapp: faWhatsapp,
    snapchat: faSnapchat, 
  };

  const icon: IconDefinition = iconMap[iconName];

  if (!icon) return <div>Icon not found</div>;

  return <FontAwesomeIcon className={className} icon={icon} />;
};
