import { setRequestLocale } from "next-intl/server";
import { use } from "react";

export default function CV({params}: {params: Promise<{locale: string}>;}){
    const {locale} = use(params);
    setRequestLocale(locale);

    return(
        <div>
            <h1>WIP</h1>
        </div>
    );
}