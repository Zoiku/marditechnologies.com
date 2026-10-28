import { ENQUIRY_SERVICES } from "../data/content";
import { Icon } from "./icons";

export function ServicePicker({
  value,
  onChange,
  onWhite = false,
  legend,
  legendClassName = "field-label",
}: {
  value: string;
  onChange: (service: string) => void;
  onWhite?: boolean;
  legend: string;
  legendClassName?: string;
}) {
  return (
    <fieldset className="picker-set">
      <legend className={legendClassName}>{legend}</legend>
      <div className={`picker${onWhite ? " picker--on-white" : ""}`}>
        {ENQUIRY_SERVICES.map((s) => (
          <button
            key={s.label}
            type="button"
            className="pick"
            aria-pressed={value === s.label}
            onClick={() => onChange(s.label)}
          >
            <Icon name={s.icon} />
            <span>{s.label}</span>
          </button>
        ))}
      </div>
    </fieldset>
  );
}

export function ChoiceChips({
  options,
  value,
  onChange,
  label,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
  label: string;
}) {
  return (
    <div className="chip-row" role="group" aria-label={label}>
      {options.map((o) => (
        <button
          key={o}
          type="button"
          className="chip"
          aria-pressed={value === o}
          onClick={() => onChange(value === o ? "" : o)}
        >
          {o}
        </button>
      ))}
    </div>
  );
}
