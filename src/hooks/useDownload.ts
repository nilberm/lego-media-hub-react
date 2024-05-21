import { useCallback } from "react";

const useDownload = () => {
  const download = useCallback((url: string, filename: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return download;
};

export default useDownload;