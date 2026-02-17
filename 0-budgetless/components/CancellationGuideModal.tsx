"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface Guide {
  service_name: string;
  instructions: string | null;
  url: string | null;
  difficulty: string | null;
}

interface CancellationGuideModalProps {
  subscriptionName: string;
  subscriptionId: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCanceled?: () => void;
}

function normalizeForMatch(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .replace(/plus$/, "")
    .replace(/premium$/, "");
}

export default function CancellationGuideModal({
  subscriptionName,
  subscriptionId,
  open,
  onOpenChange,
  onCanceled,
}: CancellationGuideModalProps) {
  const [guide, setGuide] = useState<Guide | null>(null);
  const [loading, setLoading] = useState(false);
  const supabase = createClient();

  useEffect(() => {
    if (!open) return;
    setGuide(null);

    async function load() {
      const { data } = await supabase
        .from("cancellation_guides")
        .select("service_name, instructions, url, difficulty");

      const normalized = normalizeForMatch(subscriptionName);
      const match = data?.find((g) =>
        normalizeForMatch(g.service_name).includes(normalized) ||
        normalized.includes(normalizeForMatch(g.service_name))
      );

      if (match) {
        setGuide(match);
      } else {
        setGuide({
          service_name: subscriptionName,
          instructions: "No cancellation guide found for this service. Try searching the service website for \"cancel subscription\" or \"manage account\".",
          url: null,
          difficulty: null,
        });
      }
    }
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, subscriptionName]);

  async function handleMarkCanceled() {
    setLoading(true);
    await supabase
      .from("subscriptions")
      .update({ is_active: false, canceled_at: new Date().toISOString() })
      .eq("id", subscriptionId);
    setLoading(false);
    onOpenChange(false);
    onCanceled?.();
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>How to cancel {subscriptionName}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          {guide && (
            <>
              {guide.instructions && (
                <div className="prose prose-sm max-w-none">
                  <pre className="whitespace-pre-wrap font-sans text-sm bg-muted p-4 rounded-md">
                    {guide.instructions}
                  </pre>
                </div>
              )}
              {guide.url && (
                <a
                  href={guide.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  Open cancellation page
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
              {guide.difficulty && (
                <p className="text-sm text-muted-foreground">
                  Difficulty: {guide.difficulty}
                </p>
              )}
              <div className="flex gap-2 pt-4">
                <Button
                  variant="outline"
                  onClick={handleMarkCanceled}
                  disabled={loading}
                >
                  {loading ? "Marking..." : "Mark as canceled"}
                </Button>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
