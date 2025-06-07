import type React from "react";

type WithLoadingProps = {
  isLoading: boolean;
  placeholder: React.ReactNode;
};

const withLoading = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return ({ isLoading, placeholder, ...props }: WithLoadingProps & P) => {
    if (isLoading) {
      return <>{placeholder}</>;
    }
    return <WrappedComponent {...(props as P)} />;
  };
};

export default withLoading;
