'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const MainDocsPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/docs/overview/general');
  }, []);

  return null;
};

export default MainDocsPage;
