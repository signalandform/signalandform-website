type PlaceholderFormProps = {
  title?: string;
  message?: string;
  fields?: { name: string; type?: string; label: string }[];
};

export default function PlaceholderForm({
  title = "Form coming soon",
  message = "This form is not yet active. Please contact us directly for now.",
  fields = [
    { name: "name", type: "text", label: "Name" },
    { name: "email", type: "email", label: "Email" },
    { name: "message", type: "textarea", label: "Message" },
  ],
}: PlaceholderFormProps) {
  return (
    <div className="bg-base-midtone rounded-lg p-8 max-w-xl">
      <h3 className="text-xl font-medium text-contrast mb-4">{title}</h3>
      <p className="text-contrast-midtone mb-6">{message}</p>
      <div className="space-y-4 opacity-60 pointer-events-none">
        {fields.map((field) => (
          <div key={field.name}>
            <label className="block text-sm font-medium text-contrast-midtone mb-2">
              {field.label}
            </label>
            {field.type === "textarea" ? (
              <textarea
                name={field.name}
                rows={4}
                className="w-full px-3 py-2 bg-base border border-base-midtone rounded text-contrast"
                disabled
              />
            ) : (
              <input
                type={field.type || "text"}
                name={field.name}
                className="w-full px-3 py-2 bg-base border border-base-midtone rounded text-contrast"
                disabled
              />
            )}
          </div>
        ))}
        <button
          type="button"
          className="px-6 py-2 bg-accent-1 text-contrast rounded font-medium"
          disabled
        >
          Submit
        </button>
      </div>
    </div>
  );
}
