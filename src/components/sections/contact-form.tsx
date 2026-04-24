"use client";

import { useState, useActionState } from "react";
import { submitContact } from "@/actions/contact";
import type { ContactFormState } from "@/actions/contact";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Spinner } from "@/components/ui/spinner";
import { TurnstileWidget } from "@/components/ui/turnstile-widget";
import type { Translations } from "@/lib/i18n/dictionaries";

interface ContactFormProps {
  dict: Translations["contact"];
}

const TURNSTILE_SITE_KEY =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA";

const initialState: ContactFormState = {};

export function ContactForm({ dict }: ContactFormProps) {
  const [state, action, isPending] = useActionState(submitContact, initialState);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [service, setService] = useState<string>("");

  if (state.success) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in duration-300">
        <CheckCircle className="h-16 w-16 text-primary mb-4" />
        <p className="text-lg font-medium text-foreground">
          {dict.form.success}
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-6">
      {/* Turnstile token — campo oculto para enviar via formData */}
      <input type="hidden" name="turnstileToken" value={turnstileToken ?? ""} />

      {/* Service — Select controlado com campo oculto */}
      <input type="hidden" name="service" value={service} />

      {/* Name */}
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm font-medium">
          {dict.form.name}
          <span className="text-destructive ml-1">*</span>
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder={dict.form.namePlaceholder}
          required
          disabled={isPending}
          className="bg-secondary/50 border-border focus:border-primary"
          aria-describedby={state.errors?.name ? "name-error" : undefined}
        />
        {state.errors?.name && (
          <p id="name-error" className="text-destructive text-xs">
            {state.errors.name._errors[0]}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium">
          {dict.form.email}
          <span className="text-destructive ml-1">*</span>
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder={dict.form.emailPlaceholder}
          required
          disabled={isPending}
          className="bg-secondary/50 border-border focus:border-primary"
          aria-describedby={state.errors?.email ? "email-error" : undefined}
        />
        {state.errors?.email && (
          <p id="email-error" className="text-destructive text-xs">
            {state.errors.email._errors[0]}
          </p>
        )}
      </div>

      {/* Service */}
      <div className="space-y-2">
        <Label className="text-sm font-medium">
          {dict.form.service}
          <span className="text-destructive ml-1">*</span>
        </Label>
        <Select onValueChange={setService} disabled={isPending}>
          <SelectTrigger className="bg-secondary/50 border-border">
            <SelectValue placeholder={dict.form.servicePlaceholder} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="landing-websites">{dict.form.services.landingWebsites}</SelectItem>
            <SelectItem value="web-apps-mvps">{dict.form.services.webAppsMvps}</SelectItem>
            <SelectItem value="mobile-apps">{dict.form.services.mobileApps}</SelectItem>
            <SelectItem value="ai-features">{dict.form.services.aiFeatures}</SelectItem>
            <SelectItem value="other">{dict.form.services.other}</SelectItem>
          </SelectContent>
        </Select>
        {state.errors?.service && (
          <p className="text-destructive text-xs">
            {state.errors.service._errors[0]}
          </p>
        )}
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-medium">
          {dict.form.message}
          <span className="text-destructive ml-1">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder={dict.form.messagePlaceholder}
          required
          rows={5}
          disabled={isPending}
          className="bg-secondary/50 border-border focus:border-primary resize-none"
          aria-describedby={state.errors?.message ? "message-error" : undefined}
        />
        {state.errors?.message && (
          <p id="message-error" className="text-destructive text-xs">
            {state.errors.message._errors[0]}
          </p>
        )}
      </div>

      {/* Turnstile */}
      <div className="flex justify-center">
        <TurnstileWidget
          siteKey={TURNSTILE_SITE_KEY}
          onVerify={setTurnstileToken}
          onExpire={() => setTurnstileToken(null)}
          onError={() => setTurnstileToken(null)}
          theme="dark"
        />
      </div>

      {/* Server error */}
      {state.serverError && (
        <div className="flex items-center gap-2 text-destructive text-sm animate-in fade-in duration-200">
          <AlertCircle className="h-4 w-4" />
          <span>{state.serverError}</span>
        </div>
      )}

      {/* Submit */}
      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={isPending || !turnstileToken || !service}
      >
        {isPending ? (
          <>
            <Spinner className="mr-2" />
            {dict.form.sending}
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            {dict.form.send}
          </>
        )}
      </Button>
    </form>
  );
}