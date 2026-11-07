"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
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
  AlertCircle,
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

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mzeeqajd";

const initialForm: CommunityFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  location: "",
  message: "",
};

const fieldClassName =
  "h-12 rounded-xl border-white/10 bg-white/[0.045] text-sm text-white shadow-none placeholder:text-blue-100/30 focus-visible:border-[#00A3E0]/70 focus-visible:ring-[#00A3E0]/30";

export const JoinCommunityDialog = ({
  open,
  onOpenChange,
}: JoinCommunityDialogProps) => {
  const [form, setForm] = useState<CommunityFormData>(initialForm);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const reduceMotion = useReducedMotion();

  const updateField = (field: keyof CommunityFormData, value: string) => {
    setForm((previous) => ({ ...previous, [field]: value }));
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (loading) return;

    setLoading(true);
    setErrorMessage("");

    try {
      const payload = {
        ...form,
        _subject: `New Louder Community Registration - ${form.firstName} ${form.lastName}`,
        _gotcha: "",
      };

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        const serverMessage =
          result?.errors?.map((item: { message: string }) => item.message).join(" ") ||
          result?.error ||
          "We couldn't submit your registration. Please try again.";

        throw new Error(serverMessage);
      }

      setSubmitted(true);
      message.success("You're in! Welcome to the Louder Community.");
    } catch (error) {
      const feedback =
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.";

      setErrorMessage(feedback);
      message.error(feedback);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = (nextOpen: boolean) => {
    if (!nextOpen && loading) return;
    if (!nextOpen) {
      setForm(initialForm);
      setSubmitted(false);
      setErrorMessage("");
    }
  
    onOpenChange(nextOpen);
  };

  const animationProps = {
    initial: { opacity: 0, y: reduceMotion ? 0 : 16 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: reduceMotion ? 0 : -12 },
    transition: { duration: reduceMotion ? 0.15 : 0.35 },
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        className="max-h-[92dvh] w-[calc(100%-20px)] max-w-[620px] gap-0 overflow-y-auto rounded-[1.6rem] border border-white/10 bg-[#091B40] p-0 text-white shadow-[0_35px_120px_rgba(0,0,0,.65)] [&>button:last-child]:hidden"
      >
        <AnimatePresence mode="wait" initial={false}>
          {submitted ? (
            /* SUCCESS STATE */
            <motion.div
              key="success"
              {...animationProps}
              className="relative overflow-hidden px-6 py-12 text-center sm:px-10 sm:py-16"
            >
              <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#00A3E0]/20 blur-[90px]" />
              <div className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-[#FFC72C]/10 blur-[90px]" />

              <div className="relative">
                <motion.div
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 14,
                  }}
                  className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-[1.7rem] border border-[#FFC72C]/30 bg-[#FFC72C]/10 text-[#FFC72C] shadow-[0_0_45px_rgba(255,199,44,.10)]"
                >
                  <CheckCircle2 className="h-10 w-10" />
                </motion.div>

                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FFC72C]">
                  REGISTRATION RECEIVED
                </p>

                <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.05em] sm:text-4xl">
                  You're part of
                  <span className="block text-[#00A3E0]">
                    something louder.
                  </span>
                </h2>

                <p className="mx-auto mt-5 max-w-sm text-sm leading-7 text-blue-100/65">
                  Thanks for reaching out! Your details have been received.
                  We're excited to connect with you and welcome you into the
                  Louder Community.
                </p>

                <div className="mx-auto mt-8 flex max-w-sm items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-left">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00A3E0]/10 text-[#00A3E0]">
                    <Heart size={19} />
                  </div>
                  <p className="text-xs leading-6 text-white/65">
                    One community. One mission. Jesus at the centre.
                  </p>
                </div>

                <Button
                  onClick={() => handleClose(false)}
                  className="mt-8 h-13 w-full rounded-full bg-[#FFC72C] text-xs font-black tracking-wide text-[#07132F] transition hover:bg-[#ffda69]"
                >
                  BACK TO LOUDER
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ) : (
            /* FORM STATE */
            <motion.div key="form" {...animationProps}>
              {/* Header */}
              <div className="relative overflow-hidden border-b border-white/10 px-6 pb-7 pt-8 sm:px-9 sm:pb-8">
                <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-[#00A3E0]/15 blur-[95px]" />
                <div className="pointer-events-none absolute bottom-0 left-0 h-px w-2/3 bg-gradient-to-r from-[#FFC72C]/70 to-transparent" />

                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <DialogHeader className="text-left">
                      <DialogTitle className="text-3xl font-black tracking-[-0.055em] text-white sm:text-4xl">
                        Let's get
                        <span className="text-[#FFC72C]"> louder.</span>
                      </DialogTitle>

                      <DialogDescription className="mt-3 max-w-sm text-sm leading-6 text-blue-100/60">
                        A few details and you're on your way. Come find your
                        people and be part of something bigger.
                      </DialogDescription>
                    </DialogHeader>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleClose(false)}
                    disabled={loading}
                    aria-label="Close dialog"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white/65 transition hover:border-[#00A3E0]/50 hover:bg-[#00A3E0]/10 hover:text-white disabled:opacity-40"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <div className="relative mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] font-semibold uppercase tracking-wide text-white/45">
                  <span className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-[#00A3E0]" />
                    Good people
                  </span>

                  <span className="flex items-center gap-2">
                    <Heart className="h-4 w-4 text-[#FFC72C]" />
                    One shared passion
                  </span>
                </div>
              </div>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="space-y-5 px-6 py-7 sm:px-9 sm:py-8"
              >
                {/* Honeypot field for spam protection */}
                <input
                  type="text"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label
                      htmlFor="firstName"
                      className="text-xs font-bold text-white/75"
                    >
                      First name <span className="text-[#FFC72C]">*</span>
                    </Label>

                    <Input
                      id="firstName"
                      name="firstName"
                      required
                      autoComplete="given-name"
                      placeholder="Your first name"
                      value={form.firstName}
                      onChange={(event) =>
                        updateField("firstName", event.target.value)
                      }
                      className={fieldClassName}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="lastName"
                      className="text-xs font-bold text-white/75"
                    >
                      Last name <span className="text-[#FFC72C]">*</span>
                    </Label>

                    <Input
                      id="lastName"
                      name="lastName"
                      required
                      autoComplete="family-name"
                      placeholder="Your last name"
                      value={form.lastName}
                      onChange={(event) =>
                        updateField("lastName", event.target.value)
                      }
                      className={fieldClassName}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-xs font-bold text-white/75"
                  >
                    Email address <span className="text-[#FFC72C]">*</span>
                  </Label>

                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#00A3E0]/75" />

                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(event) =>
                        updateField("email", event.target.value)
                      }
                      className={`${fieldClassName} pl-11`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-xs font-bold text-white/75"
                    >
                      Phone number <span className="text-[#FFC72C]">*</span>
                    </Label>

                    <div className="relative">
                      <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#00A3E0]/75" />

                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        placeholder="WhatsApp line"
                        value={form.phone}
                        onChange={(event) =>
                          updateField("phone", event.target.value)
                        }
                        className={`${fieldClassName} pl-11`}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="location"
                      className="text-xs font-bold text-white/75"
                    >
                      Where are you based?
                    </Label>

                    <div className="relative">
                      <MapPin className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#00A3E0]/75" />

                      <Input
                        id="location"
                        name="location"
                        autoComplete="address-level2"
                        placeholder="City / State"
                        value={form.location}
                        onChange={(event) =>
                          updateField("location", event.target.value)
                        }
                        className={`${fieldClassName} pl-11`}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="text-xs font-bold text-white/75"
                  >
                    Anything you'd like us to know?
                    <span className="ml-1 font-normal text-white/35">
                      (Optional)
                    </span>
                  </Label>

                  <Textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Tell us a little about yourself..."
                    value={form.message}
                    onChange={(event) =>
                      updateField("message", event.target.value)
                    }
                    className="min-h-[104px] resize-y rounded-xl border-white/10 bg-white/[0.045] text-sm text-white shadow-none placeholder:text-blue-100/30 focus-visible:border-[#00A3E0]/70 focus-visible:ring-[#00A3E0]/30"
                  />
                </div>

                {/* Inline error feedback */}
                <AnimatePresence>
                  {errorMessage && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div
                        role="alert"
                        className="flex items-start gap-3 rounded-xl border border-red-400/20 bg-red-400/[0.08] p-3 text-xs leading-6 text-red-200"
                      >
                        <AlertCircle className="mt-1 h-4 w-4 shrink-0 text-red-300" />
                        <span>{errorMessage}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <Button
                  type="submit"
                  disabled={loading}
                  className="h-14 w-full rounded-full bg-[#FFC72C] text-xs font-black tracking-[0.08em] text-[#07132F] shadow-[0_10px_32px_rgba(255,199,44,.13)] transition-all hover:-translate-y-0.5 hover:bg-[#ffda69] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      SENDING YOUR DETAILS...
                    </>
                  ) : (
                    <>
                      I'M IN — JOIN THE COMMUNITY
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>

                <p className="text-center text-[10px] leading-5 text-white/35">
                  Your information will only be used to connect with you about
                  the Louder Community.
                </p>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};