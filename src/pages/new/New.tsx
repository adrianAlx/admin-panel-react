import { ChangeEvent, useState } from 'react';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

import { FormInput } from '../../formSource';

import './new.scss';

interface NewProps {
  inputs?: Array<FormInput>;
  title: string;
}

// public:
const noImg = '/assets/no-image-icon-0.jpg';

export const New = ({ inputs, title }: NewProps) => {
  const [file, setFile] = useState<File>();

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0]);
  };

  return (
    <div className="newContainer">
      <div className="top">
        <h1>{title}</h1>
      </div>

      <div className="bottom">
        <div className="left">
          <img src={file ? URL.createObjectURL(file) : noImg} alt="image" />
        </div>
        <div className="right">
          <form>
            <div className="formInput">
              <label htmlFor="uploadImg" className="uploadImg">
                Image: <DriveFolderUploadOutlinedIcon className="icon" />
              </label>
              <input
                type="file"
                id="uploadImg"
                className="hidden"
                onChange={handleFile}
              />
            </div>

            {
              inputs?.map(input => (
                <div className="formInput" key={input.id}>
                  <label htmlFor={input.htmlFor || ''}>{input.label}</label>

                  {
                    (input.type === 'select' && (
                      <select name={input.name} id={input.htmlFor || ''}>
                        <option value="">Select an option</option>

                        {
                          input.options?.map(({ value, label }) => (
                            <option key={value} value={value}>
                              {label}
                            </option>
                          ))
                        }
                      </select>
                    )) 
                    ||
                    (input.type && (
                      <input
                        type={input.type}
                        placeholder={input.placeholder || ''}
                        id={input.htmlFor || ''}
                      />
                    ))
                    }

                </div>
              ))
            }

            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};
