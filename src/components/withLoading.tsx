import type React from "react";

type WithLoadingProps = {
  isLoading: boolean;
  isError?: boolean;
  placeholder: React.ReactNode;
};

const withLoading = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return ({
    isLoading,
    isError,
    placeholder,
    ...props
  }: WithLoadingProps & P) => {
    if (isLoading) {
      return <>{placeholder}</>;
    }
    if (isError) {
      return <div className="text-red-500">Error loading data</div>;
    }
    return <WrappedComponent {...(props as P)} />;
  };
};

export default withLoading;
