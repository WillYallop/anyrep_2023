/** @jsx h */
import { h, Fragment } from "preact";
import { tw } from "@twind";
import {
  roundedSectionOuter,
  roundedSectionInner,
  wrapperLarge,
} from "../../utils/twind.ts";
// Components
import Logo from "../partials/Logo.tsx";
// Typography
import P from "../../components/typography/P.tsx";

const FooterBlock = () => {
  return (
    <footer class={tw`${roundedSectionOuter}`}>
      <div class={tw`${roundedSectionInner} bg-sectionGrey py-12 mb-2.5`}>
        <div class={tw`${wrapperLarge}  lg:flex justify-between `}>
          <div class={tw`lg:pr-12`}>
            <div class={tw`w-44`}>
              <Logo />
            </div>
            <div class={tw`mt-10`}>
              <P text={"Address:"} className={tw`mb-1 !font-bold`} />
              <address
                class={tw`border-b border-brandDarkBlue border-opacity-10 pb-3 mb-3`}
              >
                <P
                  text={"3 Montrose Court, Norwich, Norfolk, NR7 0RY"}
                  className={tw`not-italic`}
                />
              </address>
              <P text={"Business Hours:"} className={tw`mb-1 !font-bold`} />
              <ul
                class={tw`border-b border-brandDarkBlue border-opacity-10 pb-3 mb-3`}
              >
                <li>
                  <P text={"Mon - Fri: 8:00 am - 5:00 pm"} />
                </li>
                <li>
                  <P text={"Saturday: 8:00 am - 12:00 pm"} />
                </li>
              </ul>

              <P text={"Contact us at:"} className={tw`mb-1 !font-bold`} />
              <ul>
                <li>
                  <P
                    text={
                      <Fragment>
                        Tel:{" "}
                        <a
                          href={"tel:07525150999"}
                          class={tw`font-medium hover:text-brandRed`}
                        >
                          07525 150999
                        </a>
                      </Fragment>
                    }
                  />
                </li>
                <li>
                  <P
                    text={
                      <Fragment>
                        Email:{" "}
                        <a
                          href={"mailto:anyrep@gmail.com"}
                          class={tw`font-medium hover:text-brandRed`}
                        >
                          anyrep@gmail.com
                        </a>
                      </Fragment>
                    }
                  />
                </li>
              </ul>
            </div>
          </div>
          <div
            class={tw`pt-10 mt-10 lg:mt-0 lg:pt-0 border-t border-brandDarkBlue border-opacity-20 lg:!border-t-0`}
          >
            <nav class={tw`grid grid-cols-1 sm:grid-cols-2 gap-5`}>
              <ul>
                <li class={tw`font-bold mb-2`}>Pages</li>
                <li>
                  <a href="/" class={tw`py-2 block hover:text-brandRed`}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="/book" class={tw`py-2 block hover:text-brandRed`}>
                    Book
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/anyrep/"
                    class={tw`py-2 block hover:text-brandRed`}
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.yell.com/biz/anyrep-domestic-and-commercial-appliance-repairs-norwich-7112578/"
                    class={tw`py-2 block hover:text-brandRed`}
                  >
                    Yell
                  </a>
                </li>
                <li>
                  <a
                    href="https://uk.trustpilot.com/review/anyrep.co.uk"
                    class={tw`py-2 block hover:text-brandRed`}
                  >
                    Trustpilot
                  </a>
                </li>
                <li>
                  <a
                    href="/sitemap.xml"
                    class={tw`py-2 block hover:text-brandRed`}
                  >
                    Sitemap
                  </a>
                </li>
              </ul>
              <ul>
                <li class={tw`font-bold mb-2`}>Repair Services</li>
                <li>
                  <a
                    href="/washing-machine-repairs"
                    class={tw`py-2 block hover:text-brandRed`}
                  >
                    Washing Machines
                  </a>
                </li>
                <li>
                  <a
                    href="/fridge-and-freezer-repairs"
                    class={tw`py-2 block hover:text-brandRed`}
                  >
                    Fridges & Freezers
                  </a>
                </li>
                <li>
                  <a
                    href="/dishwasher-repairs"
                    class={tw`py-2 block hover:text-brandRed`}
                  >
                    Dishwashers
                  </a>
                </li>
                <li>
                  <a
                    href="/tumble-dryer-repairs"
                    class={tw`py-2 block hover:text-brandRed`}
                  >
                    Tumble Dryers
                  </a>
                </li>
                <li>
                  <a
                    href="/oven-repairs"
                    class={tw`py-2 block hover:text-brandRed`}
                  >
                    Ovens
                  </a>
                </li>
                <li>
                  <a
                    href="/hob-repairs"
                    class={tw`py-2 block hover:text-brandRed`}
                  >
                    Hobs
                  </a>
                </li>
                <li>
                  <a
                    href="/commercial-appliance-repairs"
                    class={tw`py-2 block hover:text-brandRed`}
                  >
                    Commercial Appliances
                  </a>
                </li>
                <li>
                  <a
                    href="/extractor-hood-repairs"
                    class={tw`py-2 block hover:text-brandRed`}
                  >
                    Extractor Hoods
                  </a>
                </li>
                <li>
                  <a
                    href="/hoover-repairs"
                    class={tw`py-2 block hover:text-brandRed`}
                  >
                    Hoovers
                  </a>
                </li>
                <li>
                  <a
                    href="/microwave-repairs"
                    class={tw`py-2 block hover:text-brandRed`}
                  >
                    Microwaves
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div
        class={tw`${roundedSectionInner} bg-sectionGreyDark py-6 px-4 text-center`}
      >
        <P
          background={"light"}
          text={
            <Fragment>
              Website design and development by{" "}
              <a
                class={tw`text-brandRedHover`}
                href="https://williamyallop.com/"
              >
                William Yallop
              </a>
            </Fragment>
          }
        />
      </div>
      <div class={tw`bg-white mt-6 text-center`}>
        <div
          class={tw`trustpilot-widget`}
          data-locale="en-GB"
          data-template-id="5419b6a8b0d04a076446a9ad"
          data-businessunit-id="62eac065864cf2b2acdb9fec"
          data-style-height="24px"
          data-style-width="100%"
          data-theme="light"
          data-min-review-count="10"
          data-without-reviews-preferred-string-id="1"
        >
          <a
            href="https://uk.trustpilot.com/review/anyrep.co.uk"
            target="_blank"
            rel="noopener"
          >
            Trustpilot
          </a>
        </div>
      </div>
    </footer>
  );
};
export default FooterBlock;
