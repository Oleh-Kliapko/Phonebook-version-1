import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="rgb(134, 203, 200)"
      ariaLabel="three-dots-loading"
      wrapperStyle={{ justifyContent: 'center' }}
      wrapperClassName=""
      visible={true}
    />
  );
};

export const LoaderSave = () => {
  return (
    <ThreeDots
      height="22"
      width="80"
      radius="9"
      color="rgb(120, 180, 200)"
      ariaLabel="three-dots-loading"
      wrapperStyle={{ justifyContent: 'center' }}
      wrapperClassName=""
      visible={true}
      margin="0"
      padding="0"
    />
  );
};

export const LoaderDelete = () => {
  return (
    <ThreeDots
      height="18"
      width="30"
      radius="9"
      color="grey"
      ariaLabel="three-dots-loading"
      wrapperStyle={{ justifyContent: 'center' }}
      wrapperClassName=""
      visible={true}
      margin="0"
      padding="0"
    />
  );
};
