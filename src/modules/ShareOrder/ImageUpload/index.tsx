import React, { useState } from 'react';
import { IoCloudUploadOutline } from 'react-icons/io5';
import { Image } from '@/shared/components';
import styles from './styles.module.scss';

export const ImageUpload: React.FC = () => {
  const [imageSrc, setImageSrc] = useState('');
  const [isUploaded, setIsUploaded] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader: any = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
        setIsUploaded(true);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <label
      htmlFor="upload"
      className={`${styles.uploadLabel} ${isUploaded ? styles.uploaded : ''}`}
    >
      <input
        type="file"
        id="upload"
        className="d-none"
        accept="image/*"
        required
        onChange={handleImageUpload}
      />
      <>
        <IoCloudUploadOutline className={styles.icon} />
        <h3 className={styles.title}>قم برفع صورة للمشكلة</h3>
      </>
      {imageSrc && <Image src={imageSrc} alt="Uploaded Image" asp={55} />}
    </label>
  );
};
