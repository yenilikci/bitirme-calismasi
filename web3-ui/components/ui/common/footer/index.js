import useTranslation from "next-translate/useTranslation";
import {useRouter} from "next/router";
import i18nConfig from "../../../../i18n.json";

const {locales, defaultLocale} = i18nConfig;
export default function Footer() {
  const { t, lang } = useTranslation();
  const router = useRouter();

  return (
      <footer className="p-4 bg-white sm:p-6 dark:bg-gray-900">
          <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0">
                  <a href="https://flowbite.com" className="flex items-center">
                      <img src="/CourseHash.png" style={{height: '100px'}} className="mr-2 h-8 bg-gray-700 p-2 rounded"
                           alt="FlowBite Logo"/>
                      <span
                          className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">Coursehash.</span>
                  </a>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                  <div>
                      <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                      <ul className="text-gray-600 dark:text-gray-400">
                          <li className="mb-4">
                              <a href="https://coursehash.com" className="hover:underline">Coursehash</a>
                          </li>
                          <li>
                              <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                          </li>
                      </ul>
                  </div>
                  <div>
                      <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                      <ul className="text-gray-600 dark:text-gray-400">
                          <li className="mb-4">
                              <a href="https://github.com/themesberg/flowbite" className="hover:underline ">LinkedIn</a>
                          </li>
                          <li>
                              <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Instagram</a>
                          </li>
                      </ul>
                  </div>
                  <div>
                      <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                      <ul className="text-gray-600 dark:text-gray-400">
                          <li className="mb-4">
                              <a href="#" className="hover:underline">Privacy Policy</a>
                          </li>
                          <li>
                              <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
          <div className="sm:flex sm:items-center sm:justify-between">
              <select
                  className="mt-1 w-32 h-8  text-center h-12 text-base placeholder-gray-600 border dark:border-slate-400 rounded-lg appearance-none focus:shadow-outline dark:bg-gray-700 dark:text-slate-200"
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
              <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2022 <a href="https://flowbite.com" className="hover:underline">Coursehash™</a> All Rights Reserved.
        </span>
              <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                  <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fill-rule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                clip-rule="evenodd"/>
                      </svg>
                  </a>
              </div>
          </div>
      </footer>
  );
}
