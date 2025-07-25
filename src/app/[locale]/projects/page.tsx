import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import FirefliesConsumer from "@/components/consumers/FirefliesConsumer";

export default function Projects({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);

  return (
    <div>
      <h1>WIP</h1>
      <FirefliesConsumer />
    </div>
  );
}
