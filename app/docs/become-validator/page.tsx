'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ValidatorPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/docs/overview/validator');
  }, []);

  return null;
};

export default ValidatorPage;
