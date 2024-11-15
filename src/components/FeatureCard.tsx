import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
}

export function FeatureCard({
  title,
  description,
  icon: Icon,
  gradient,
}: FeatureCardProps) {
  return (
    <div className="relative group h-full">
      <div
        className={`absolute -inset-0.5 ${gradient} rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-500`}
      />
      <div className="relative p-6 bg-gray-100/50 dark:bg-gray-900/50 rounded-xl backdrop-blur-sm border border-neutral-400/20 hover:border-neutral-400/30 transition-all duration-300 h-full">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-black/10 dark:bg-white/10 rounded-lg">
            <Icon className="w-6 h-6 text-teal-400" />
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="dark:text-teal-100 text-gray-700">{description}</p>
      </div>
    </div>
  );
}
