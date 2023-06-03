import {
  IconFriends,
  IconBarbell,
  IconCalendar,
  IconClock,
  IconStar,
  IconCashBanknote,
} from "@tabler/icons-react";
export default function Features() {
  return (
    <section className="bg-jet py-12">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Designed for business teams like yours
          </h2>
          <p className="text-white sm:text-xl ">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <IconFriends color="red" size={30} />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Marketing
            </h3>
            <p className="text-white ">
              Plan it, create it, launch it. Collaborate seamlessly with all the
              organization and hit your marketing goals every month with our
              marketing plan.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <IconBarbell color="red" size={30} />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">Legal</h3>
            <p className="text-white ">
              Protect your organization, devices and stay compliant with our
              structured workflows and custom permissions made for you.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <IconStar color="red" size={30} />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Business Automation
            </h3>
            <p className="text-white ">
              Auto-assign tasks, send Slack messages, and much more. Now power
              up with hundreds of new templates to help you get started.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
             <IconClock color="red" size={30} />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">Finance</h3>
            <p className="text-white ">
              Audit-proof software built for critical financial operations like
              month-end close and quarterly budgeting.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
             <IconCalendar color="red" size={30}/>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Enterprise Design
            </h3>
            <p className="text-white ">
              Craft beautiful, delightful experiences for both marketing and
              product with real cross-company collaboration.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
         <IconCashBanknote color="red" size={30}/>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Operations
            </h3>
            <p className="text-white">
              Keep your company’s lights on with customizable, iterative, and
              structured workflows built for all efficient teams and individual.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
