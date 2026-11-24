import type { WireItem } from '../types/article';

interface BreakingWiresProps {
  wires: WireItem[];
}

export function BreakingWires({ wires }: BreakingWiresProps) {
  return (
    <aside
      aria-labelledby="breaking-wires-heading"
      className="flex flex-col"
    >
      <div className="border-b-2 border-[#1A1A1A] pb-2.5">
        <div className="flex items-baseline justify-between gap-2">
          <h2
            id="breaking-wires-heading"
            className="font-ui text-[12px] font-bold uppercase tracking-[0.16em] text-[#8B1E1E]"
          >
            Breaking Wires
          </h2>
          <span className="font-ui text-[10px] font-medium uppercase tracking-[0.14em] text-[#555555]">
            Dispatches
          </span>
        </div>
        <p className="mt-1 font-body text-[12px] italic text-[#555555]">
          Unverified bulletins filed from the newsroom telegraph desk.
        </p>
      </div>

      <ol className="divide-y divide-[#D6D2C4]" data-testid="breaking-wires-list">
        {wires.map((wire) => (
          <li key={wire.id} className="py-4 first:pt-4 last:pb-2">
            <div className="font-ui text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8B1E1E] tabular-nums">
              {wire.timestamp}
            </div>
            <p className="mt-1.5 font-body text-[15px] leading-[1.55] text-[#1A1A1A]">
              {wire.headline}
            </p>
          </li>
        ))}
      </ol>

      <div className="mt-6 border border-[#D6D2C4] bg-[#F2EFE9] p-4">
        <p className="font-ui text-[10px] font-bold uppercase tracking-[0.16em] text-[#1A1A1A]">
          Corrections Policy
        </p>
        <p className="mt-1.5 font-body text-[13px] leading-[1.6] text-[#555555]">
          Because every figure in this broadsheet is fabricated to the nearest
          tenth of a percent, factual corrections are issued solely when a
          story accidentally resembles reality.
        </p>
      </div>
    </aside>
  );
}
