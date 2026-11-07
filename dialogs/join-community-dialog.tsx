"use client";
import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { message } from "antd";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Heart,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Users,
  X,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface JoinCommunityDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface CommunityFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  message: string;
}

interface JoinResponse {
  message?: string;
  communityUrl?: string;
}

const initialForm: CommunityFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  location: "",
  message: "",
};

const fieldClassName =
  "h-12 rounded-xl border-white/10 bg-white/[0.045] text-sm text-white shadow-none placeholder:text-blue-100/30 focus-visible:border-brand-cyan/70 focus-visible:ring-brand-cyan/30";

export const JoinCommunityDialog = ({
  open,
  onOpenChange,
}: JoinCommunityDialogProps) => {
  const [form, setForm] = useState<CommunityFormData>(initialForm);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [communityUrl, setCommunityUrl] = useState("");

  const updateField = (field: keyof CommunityFormData, value: string) => {
    setForm((previous) => ({ ...previous, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (loading) return;

    setLoading(true);
    try {
      const response = await fetch("/api/community/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = (await response.json().catch(() => ({}))) as JoinResponse;

      if (!response.ok) {
        throw new Error(result.message || "Unable to complete registration. Please try again.");
      }

      setCommunityUrl(result.communityUrl || "");
      setSubmitted(true);
      message.success("You're in! Welcome to the Louder Community.");
    } catch (error) {
      message.error(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleClose = (nextOpen: boolean) => {
    if (!nextOpen && !loading) {
      setForm(initialForm);
      setSubmitted(false);
      setCommunityUrl("");
    }
    onOpenChange(nextOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-h-[92dvh] w-[calc(100%-20px)] max-w-[600px] gap-0 overflow-y-auto rounded-[1.6rem] border border-white/10 bg-[#091B40] p-0 text-white shadow-[0_35px_120px_rgba(0,0,0,.65)] [&>button:last-child]:hidden">
        <AnimatePresence mode="wait" initial={false}>
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="relative overflow-hidden px-6 py-12 text-center sm:px-10 sm:py-14"
            >
              <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-brand-cyan/20 blur-[90px]" />
              <div className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-brand-gold/10 blur-[90px]" />
              <div className="relative">
                <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-[1.7rem] border border-brand-gold/30 bg-brand-gold/10 text-brand-gold shadow-[0_0_45px_rgba(255,199,44,.10)]">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-gold">
                  YOU'RE IN!
                </p>
                <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.05em] sm:text-4xl">
                  Welcome to the
                  <span className="block text-brand-cyan">Louder Community.</span>
                </h2>
                <p className="mx-auto mt-5 max-w-sm text-sm leading-7 text-blue-100/65">
                  You're now part of a community united by worship, faith and a
                  passion for making a difference. We can't wait to connect with you.
                </p>

                {communityUrl && (
                  <a
                    href={communityUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-full bg-brand-gold px-6 py-4 text-xs font-black tracking-wide text-brand-blue-dark transition hover:bg-brand-gold-light"
                  >
                    JOIN THE COMMUNITY GROUP <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}

                <Button
                  onClick={() => handleClose(false)}
                  variant="outline"
                  className="mt-4 h-12 w-full rounded-full border-white/15 bg-white/[0.04] text-xs font-bold text-white hover:bg-white/10 hover:text-white"
                >
                  BACK TO LOUDER
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <div className="relative overflow-hidden border-b border-white/10 px-6 pb-7 pt-8 sm:px-9 sm:pb-8">
                <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-brand-cyan/15 blur-[95px]" />
                <div className="pointer-events-none absolute bottom-0 left-0 h-px w-2/3 bg-gradient-to-r from-brand-gold/70 to-transparent" />

                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-gold/25 bg-brand-gold/10 px-3 py-1.5">
                      <Sparkles className="h-3.5 w-3.5 text-brand-gold" />
                      <span className="text-[9px] font-black uppercase tracking-[0.18em] text-brand-gold">
                        YOUR PEOPLE. YOUR COMMUNITY.
                      </span>
                    </div>
                    <DialogHeader className="text-left">
                      <DialogTitle className="text-3xl font-black tracking-[-0.055em] text-white sm:text-4xl">
                        Let's get
                        <span className="text-brand-gold"> louder.</span>
                      </DialogTitle>
                      <DialogDescription className="mt-3 max-w-sm text-sm leading-6 text-blue-100/60">
                        A few details and you're on your way. Come be part of the
                        Louder Community.
                      </DialogDescription>
                    </DialogHeader>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleClose(false)}
                    disabled={loading}
                    aria-label="Close dialog"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white/65 transition hover:border-brand-cyan/50 hover:bg-brand-cyan/10 hover:text-white disabled:opacity-40"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <div className="relative mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] font-semibold uppercase tracking-wide text-white/45">
                  <span className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-brand-cyan" /> Good people
                  </span>
                  <span className="flex items-center gap-2">
                    <Heart className="h-4 w-4 text-brand-gold" /> One shared passion
                  </span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 px-6 py-7 sm:px-9 sm:py-8">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-xs font-bold text-white/75">
                      First name <span className="text-brand-gold">*</span>
                    </Label>
                    <Input
                      id="firstName"
                      required
                      autoComplete="given-name"
                      placeholder="Your first name"
                      value={form.firstName}
                      onChange={(event) => updateField("firstName", event.target.value)}
                      className={fieldClassName}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-xs font-bold text-white/75">
                      Last name <span className="text-brand-gold">*</span>
                    </Label>
                    <Input
                      id="lastName"
                      required
                      autoComplete="family-name"
                      placeholder="Your last name"
                      value={form.lastName}
                      onChange={(event) => updateField("lastName", event.target.value)}
                      className={fieldClassName}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs font-bold text-white/75">
                    Email address <span className="text-brand-gold">*</span>
                  </Label>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-cyan/75" />
                    <Input
                      id="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(event) => updateField("email", event.target.value)}
                      className={`${fieldClassName} pl-11`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-xs font-bold text-white/75">
                      Phone number <span className="text-brand-gold">*</span>
                    </Label>
                    <div className="relative">
                      <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-cyan/75" />
                      <Input
                        id="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        placeholder="+234..."
                        value={form.phone}
                        onChange={(event) => updateField("phone", event.target.value)}
                        className={`${fieldClassName} pl-11`}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location" className="text-xs font-bold text-white/75">
                      Where are you based?
                    </Label>
                    <div className="relative">
                      <MapPin className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-cyan/75" />
                      <Input
                        id="location"
                        autoComplete="address-level2"
                        placeholder="City / State"
                        value={form.location}
                        onChange={(event) => updateField("location", event.target.value)}
                        className={`${fieldClassName} pl-11`}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-xs font-bold text-white/75">
                    Anything you'd like us to know?
                    <span className="ml-1 font-normal text-white/35">(Optional)</span>
                  </Label>
                  <Textarea
                    id="message"
                    rows={3}
                    placeholder="Tell us a little about yourself..."
                    value={form.message}
                    onChange={(event) => updateField("message", event.target.value)}
                    className="min-h-[104px] resize-y rounded-xl border-white/10 bg-white/[0.045] text-sm text-white shadow-none placeholder:text-blue-100/30 focus-visible:border-brand-cyan/70 focus-visible:ring-brand-cyan/30"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="h-14 w-full rounded-full bg-brand-gold text-xs font-black tracking-[0.08em] text-brand-blue-dark shadow-[0_10px_32px_rgba(255,199,44,.13)] transition-all hover:-translate-y-0.5 hover:bg-brand-gold-light disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      GETTING YOU CONNECTED...
                    </>
                  ) : (
                    <>
                      I'M IN — JOIN THE COMMUNITY
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>

                <p className="text-center text-[10px] leading-5 text-white/35">
                  By joining, you agree to receive relevant community updates and
                  announcements. Your information will be handled responsibly.
                </p>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
