import { useState } from 'react';
import { PiEye, PiEyeSlashLight } from 'react-icons/pi';
import styles from './styles.module.scss';

interface props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const PasswordInput = (props: props) => {
  const [inputType, setInputType] = useState('password');

  const handleClick = (e) => {
    e.preventDefault();
    setInputType(inputType === 'password' ? 'text' : 'password');
  };
  return (
    <div className={styles.passwordInputWrapper}>
      <input {...props} type={inputType} />
      <button
        className={`${styles.eyeBtn} ${inputType === 'password' ? '' : styles.active}`}
        onClick={handleClick}
      >
        {inputType === 'password' ? <PiEyeSlashLight /> : <PiEye />}
      </button>
    </div>
  );
};
