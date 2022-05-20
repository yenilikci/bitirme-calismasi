import useTranslation from "next-translate/useTranslation";
import {useRouter} from "next/router";
import i18nConfig from "../../../../i18n.json";

const {locales, defaultLocale} = i18nConfig;
export default function Footer() {
  const { t, lang } = useTranslation();
  const router = useRouter();

  return (
    <footer className="bg-gray-900 pt-1">
      <div className="container mx-auto px-6">
        <div className="mt-5 flex flex-col items-center">
          <div className="py-4">
            <p className="mb-2 text-white text-sm text-primary-2 font-bold text-center">
              © {new Date().getFullYear()}
            </p>
            <select
                className="w-32 h-8 bg-gray-900 text-slate-300 text-center h-12 text-base placeholder-gray-600 border dark:border-slate-400 rounded-lg appearance-none focus:shadow-outline dark:bg-gray-700 dark:text-slate-200"
                onChange={(e) => {
                  const lang = e.target.value === defaultLocale ? "" : e.target.value;

                  router.push(`/${lang}`, null, {
                    locale: e.target.value,
                  });
                }}
            >
              <option>{t(`common:language-name-${lang}`)}</option>

              {locales.map((lng) => {
                if (lng === lang) return null;

                return (
                    <option value={lng} key={lng}>
                      {t(`common:language-name-${lng}`)}
                    </option>
                );
              })}
            </select>
          </div>
            <img src="/CourseHash.png" style={{height: '100px'}} className="my-2" alt="Flowbite Logo"/>

        </div>
      </div>
    </footer>
  );
}
