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
  const px = size === 'sm' ? 28 : size === 'lg' ? 44 : 34;
  const iconSrc = variant === 'navy' ? '/brand/payflow-icon-navy.png' : '/brand/payflow-icon-fullcolor.png';

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <img
        src={iconSrc}
        width={px}
        height={px}
        alt={`${brand.name} logo`}
        className={cn('shrink-0', variant === 'navy' ? '' : '')}
      />
      <div className="leading-tight">
        <div className="text-[15px] font-semibold tracking-[-0.01em] text-slate-900">
          <span className="text-slate-900">PayFlow</span>{' '}
          <span className="text-slate-700">Autopilot</span>
        </div>
        <div className="text-[12px] text-slate-500">{brand.tagline}</div>
      </div>
    </div>
  );
}
