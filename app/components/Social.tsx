import ArrowIconLink from "./ArrowIconLink";

export default function Social() {
  return (
    <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
      <li><ArrowIconLink
        href="https://www.linkedin.com/in/brhn-me/"
        text="linkedin"
      /></li>
      <li><ArrowIconLink
        href="https://github.com/brhn-me"
        text="github"
      /></li>
      {/* Add more ArrowIconLink components for other social links */}
    </ul>
  );
}
