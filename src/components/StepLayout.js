

export default function StepLayout({ children, step }) {
  return (
    <div className={`step-layout step-${step}`}>
      {children}
    </div>
  );
}