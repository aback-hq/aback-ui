import { StatusIndicator } from "@/components/ui/status-indicator";

const products = [
  { name: "Web app", status: <StatusIndicator tone="success">Live</StatusIndicator> },
  { name: "Mobile app", status: <StatusIndicator tone="brand">Beta</StatusIndicator> },
  { name: "Desktop app", status: <StatusIndicator tone="warning" shape="half">Building</StatusIndicator> },
  { name: "Watch app", status: <StatusIndicator shape="outline">Planned</StatusIndicator> },
  { name: "Legacy API", status: <StatusIndicator>Retired</StatusIndicator> },
];

export function StatusIndicatorExample() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <table className="w-full text-sm">
        <caption className="sr-only">Example product statuses</caption>
        <thead>
          <tr className="border-b border-border text-left text-xs font-medium uppercase tracking-wide text-muted-foreground">
            <th scope="col" className="py-2 font-medium">
              Product
            </th>
            <th scope="col" className="py-2 font-medium">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.name} className="border-b border-border">
              <td className="py-2.5 text-foreground">{product.name}</td>
              <td className="py-2.5">{product.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="flex flex-wrap items-center gap-x-5 gap-y-2">
        <StatusIndicator tone="success" pulse>
          Deploying now
        </StatusIndicator>
        <StatusIndicator tone="danger">Failed</StatusIndicator>
      </p>
    </div>
  );
}
