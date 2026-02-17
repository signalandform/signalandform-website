"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const REMINDER_OPTIONS = [
  { value: 1, label: "1 day before" },
  { value: 3, label: "3 days before" },
  { value: 7, label: "7 days before" },
];

export default function SettingsPage() {
  const [reminderDays, setReminderDays] = useState<number[]>([1, 3, 7]);
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push("/login");
        return;
      }
      const { data } = await supabase
        .from("profiles")
        .select("reminder_days")
        .eq("id", user.id)
        .single();
      if (data?.reminder_days) {
        setReminderDays(data.reminder_days as number[]);
      }
    }
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  function toggleReminder(day: number) {
    setReminderDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day].sort((a, b) => a - b)
    );
  }

  async function handleSave() {
    setLoading(true);
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    await supabase
      .from("profiles")
      .update({ reminder_days: reminderDays, updated_at: new Date().toISOString() })
      .eq("id", user.id);

    setLoading(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-foreground">
          ← Back to dashboard
        </Link>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Reminder settings</CardTitle>
          <CardDescription>
            Choose when you want to receive email reminders before subscription renewals
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Send reminders</Label>
            <div className="flex flex-col gap-2">
              {REMINDER_OPTIONS.map((opt) => (
                <label
                  key={opt.value}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={reminderDays.includes(opt.value)}
                    onChange={() => toggleReminder(opt.value)}
                    className="rounded border-input"
                  />
                  <span>{opt.label}</span>
                </label>
              ))}
            </div>
            <p className="text-muted-foreground text-sm">
              You can select multiple options. Reminders are sent daily at 9am UTC.
            </p>
          </div>
          <Button onClick={handleSave} disabled={loading}>
            {loading ? "Saving..." : saved ? "Saved!" : "Save preferences"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
