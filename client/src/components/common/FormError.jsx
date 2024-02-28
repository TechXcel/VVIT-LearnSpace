import Warning from "../icons/Warning";

export const FormError = ({ message }) => {
  if (!message) return null;

  return (
    <div className="flex items-center p-3 text-sm rounded-md bg-destructive/15 gap-x-2 text-destructive">
      <Warning />
      <p>{message}</p>
    </div>
  );
};
