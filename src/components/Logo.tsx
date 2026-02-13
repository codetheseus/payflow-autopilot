import { brand } from '../lib/brand';
import { cn } from '../lib/cn';

type LogoVariant = 'full' | 'navy';

export function Logo({
  variant = 'full',
  size = 'md',
  className,
}: {
  variant?: LogoVariant;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}) {
  const px = size === 'sm' ? 30 : size === 'lg' ? 48 : 38;

  // 🔥 Add version query to force refresh
  const iconSrc =
    variant === 'navy'
      ? '/brand/payflow-new-icon.png?v=2'
      : '/brand/payflow-new-icon.png?v=2';

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <img
        src={iconSrc}
        width={px}
        height={px}
        alt={`${brand.name} logo`}
        className="shrink-0 object-contain"
      />

      <div className="leading-tight">
        <div className="text-[18px] font-semibold tracking-[-0.02em] text-slate-900">
          <span className="text-slate-900">PayFlow</span>{' '}
          <span className="text-slate-700">Autopilot</span>
        </div>

        <div className="text-[12px] text-slate-500">
          {brand.tagline}
        </div>
      </div>
    </div>
  );
}
