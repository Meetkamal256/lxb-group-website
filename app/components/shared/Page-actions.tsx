import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

type PageActionsProps = {
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
};

export default function PageActions({
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: PageActionsProps) {
  return (
    <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
      <Link
        href={primaryHref}
        className="inline-flex items-center text-white! justify-center gap-3 rounded-md bg-[#8A672B] px-5 py-3 text-xs font-semibold transition-colors hover:bg-[#765722] sm:px-7 sm:py-4 sm:text-sm"
      >
        {primaryLabel}
        <FiArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>

      <Link
        href={secondaryHref}
        className="inline-flex items-center justify-center rounded-md border border-[#14243A]/20 px-5 py-3 text-xs font-semibold text-[#14243A] transition-colors hover:border-[#B99A5B] hover:bg-[#F5F3EE] sm:px-7 sm:py-4 sm:text-sm"
      >
        {secondaryLabel}
      </Link>
    </div>
  );
}
