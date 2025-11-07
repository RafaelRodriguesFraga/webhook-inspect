import { WebhooksListItem } from "./webhooks-list-item";

export function WebhooksList() {
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="space-y-1, p-2">
        <WebhooksListItem />
        <WebhooksListItem />
        <WebhooksListItem />
        <WebhooksListItem />
        <WebhooksListItem />
        <WebhooksListItem />
        <WebhooksListItem />
        <WebhooksListItem />
        <WebhooksListItem />
      </div>
    </div>
    // <div className="flex-1 overflow-y-auto bg-zinc-900 p-4 text-zinc-400">
    //   <p className="text-center">No webhooks captured yet.</p>
    // </div>
  );
}
