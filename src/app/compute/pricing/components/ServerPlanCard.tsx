"use client";

import { useState } from "react";
import { Cpu, MemoryStick, HardDrive, Sparkles, Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ServerPlan, IPv4Plan, ServicePlan } from "@/data/serverPlans";
import {
  STORAGE_PRICE_INR_MONTHLY,
  STORAGE_PRICE_INR_HOURLY,
  STORAGE_PRICE_USD_MONTHLY,
  STORAGE_PRICE_USD_HOURLY,
} from "@/data/serverPlans";

/* =====================
   Types
===================== */

type AnyPlan = ServerPlan | IPv4Plan | ServicePlan;

interface ServerPlanCardProps {
  plan: AnyPlan;
  currency: "USD" | "INR";
  interval: "monthly" | "hourly";
  className?: string;
}

/* =====================
   Component
===================== */

export function ServerPlanCard({
  plan,
  currency,
  interval,
  className,
}: ServerPlanCardProps) {

  /* ---------- Plan type detection ---------- */
  const isIPv4 = "ipType" in plan;
  const isQuantityPlan = isIPv4 || !("vCPU" in plan);

  /* ---------- Quantity (IPv4 + services) ---------- */
  const [quantity, setQuantity] = useState(1);

  /* ---------- Storage (compute only) ---------- */
  const baseStorage = 30;
  const [additionalStorage, setAdditionalStorage] = useState(0);
  const [storageInput, setStorageInput] = useState(String(baseStorage));
  const [storageError, setStorageError] = useState(false);

  /* ---------- Handlers ---------- */

  const handleDecrement = () => {
    if (isQuantityPlan && quantity > 1) {
      setQuantity((q) => q - 1);
      return;
    }

    if (!isQuantityPlan && additionalStorage > 0) {
      const next = additionalStorage - 1;
      setAdditionalStorage(next);
      setStorageInput(String(baseStorage + next));
    }
  };

  const handleIncrement = () => {
    if (isQuantityPlan) {
      setQuantity((q) => q + 1);
      return;
    }

    const next = additionalStorage + 1;
    setAdditionalStorage(next);
    setStorageInput(String(baseStorage + next));
  };

  const handleStorageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return;

    if (value === "") return;

    const num = Number(value);

    if (isQuantityPlan) {
      setQuantity(num < 1 ? 1 : num);
    } else {
      setStorageInput(value);
      setStorageError(num < baseStorage);
    }
  };

  const handleStorageBlur = () => {
    if (isQuantityPlan) {
      if (quantity < 1) setQuantity(1);
      return;
    }

    if (storageInput === "" || Number(storageInput) < baseStorage) {
      setStorageInput(String(baseStorage));
      setAdditionalStorage(0);
      setStorageError(false);
      return;
    }

    const num = Number(storageInput);
    setAdditionalStorage(num - baseStorage);
    setStorageInput(String(num));
  };

  /* ---------- Pricing ---------- */

  const effectiveInterval = isQuantityPlan ? "monthly" : interval;

  const basePrice =
    currency === "INR"
      ? effectiveInterval === "monthly"
        ? plan.priceINRMonthly
        : plan.priceINRHourly!
      : effectiveInterval === "monthly"
      ? plan.priceUSDMonthly
      : plan.priceUSDHourly!;

  const storagePrice =
    currency === "INR"
      ? effectiveInterval === "monthly"
        ? additionalStorage * STORAGE_PRICE_INR_MONTHLY
        : additionalStorage * STORAGE_PRICE_INR_HOURLY
      : effectiveInterval === "monthly"
      ? additionalStorage * STORAGE_PRICE_USD_MONTHLY
      : additionalStorage * STORAGE_PRICE_USD_HOURLY;

  const displayPrice = isQuantityPlan
    ? basePrice * quantity
    : basePrice + storagePrice;

  /* ---------- Helpers ---------- */

  const formatPrice = (price: number) =>
    new Intl.NumberFormat(currency === "USD" ? "en-US" : "en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);

  const quantityLabel = (() => {
    if (isIPv4) return "IP Count:";

    if ("name" in plan) {
      if (plan.name === "VPN" || plan.name === "Backup") {
        return "Node:";
      }

      if (plan.name.toLowerCase().includes("load balancer")) {
        return "";
      }
    }

    return "Storage:";
  })();

  const isLoadBalancer = "name" in plan && plan.name.toLowerCase().includes("load balancer");

  const currencySymbol = currency === "USD" ? "$" : "₹";
  const intervalLabel = effectiveInterval === "monthly" ? "/mo" : "/hr";

  return (
    <div
        className={cn(
            "group relative flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-4 sm:p-5",
            "bg-cmpt_card/10 border border-cmpt_border rounded-cmpt_lg",
            "hover:bg-cmpt_card hover:border-cmpt_primary/30",
            "transition-all duration-300",
            plan.popular && "border-cmpt_primary/50 bg-cmpt_primary/5",
            className
        )}
        >
        {plan.popular && (
            <div className="absolute -top-3 left-4 flex items-center gap-1 px-3 py-1 bg-cmpt_primary text-cmpt_primary-foreground text-xs font-semibold rounded-full">
            <Sparkles className="w-3 h-3" />
            Popular
            </div>
        )}

        {/* Plan Info */}
        <div className="flex-1 min-w-0">
            <h4 className="text-cmpt_foreground font-semibold text-lg mb-2">{plan.name}</h4>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm text-cmpt_muted-foreground">
              {!isQuantityPlan && (
                <>
                  <div className="flex items-center gap-1.5">
                    <Cpu className="w-4 h-4 text-cmpt_primary" />
                    <span>{(plan as ServerPlan).vCPU} vCPU</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MemoryStick className="w-4 h-4 text-cmpt_primary" />
                    <span>{(plan as ServerPlan).ram} RAM</span>
                  </div>
                </>
              )}
              <div className="flex items-center gap-1.5">
                {(() => {
                    if ("name" in plan && plan.name.toLowerCase().includes("load balancer")) {
                      return "";
                    }
                    return <HardDrive className="w-4 h-4 text-cmpt_primary" />;
                  })()}
                <span>
                  {(() => {
                    if ("name" in plan && plan.name.toLowerCase().includes("load balancer")) {
                      return "";
                    }
                    if (isIPv4) {
                      return `${quantity} IP`;
                    }
                    if ("name" in plan) {
                      const name = plan.name.toLowerCase();

                      if (name === "vpn" || name === "backup") {
                        return `${quantity} Node`;
                      }

                      if (name.includes("storage") || name.includes("snapshot")) {
                        return `${quantity} GB`;
                      }
                    }
                    return `${baseStorage + additionalStorage} GB`;
                  })()}
                </span>
              </div>
            </div>
        </div>

        {/* Storage Counter */}
        <div className="flex items-center gap-2">
            <span className="text-xs text-cmpt_muted-foreground whitespace-nowrap">
              {quantityLabel}
            </span>

            {!isLoadBalancer && (
              <div className="flex items-center gap-1">
                {/* Decrement */}
                <button
                  type="button"
                  onClick={handleDecrement}
                  disabled={isQuantityPlan ? quantity === 1 : additionalStorage === 0}
                  className={cn(
                    "flex items-center justify-center w-7 h-7",
                    "bg-cmpt_secondary/50 border border-cmpt_border rounded-cmpt_sm",
                    "text-cmpt_foreground hover:bg-cmpt_secondary hover:border-cmpt_primary/30",
                    "transition-all duration-200",
                    "disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-cmpt_secondary/50 disabled:hover:border-cmpt_border"
                  )}
                >
                  <Minus className="w-3 h-3" />
                </button>

                {/* Quantity / Storage */}
                <input
                  type="text"
                  value={isQuantityPlan ? String(quantity) : storageInput}
                  onChange={handleStorageChange}
                  onBlur={handleStorageBlur}
                  className={cn(
                    "flex items-center justify-center w-[70px] h-7 px-2",
                    "bg-cmpt_secondary/30 border border-cmpt_border rounded-cmpt_sm",
                    "text-cmpt_foreground font-mono text-xs font-medium text-center",
                    "focus:outline-none focus:ring-1 focus:ring-cmpt_primary/40",
                    storageError
                      ? "border-red-500 focus:ring-red-400/40"
                      : "border-cmpt_border focus:ring-cmpt_primary/40"
                  )}
                />

                {/* Increment */}
                <button
                  type="button"
                  onClick={handleIncrement}
                  disabled={additionalStorage >= 1000}
                  className={cn(
                    "flex items-center justify-center w-7 h-7",
                    "bg-cmpt_secondary/50 border border-cmpt_border rounded-cmpt_sm",
                    "text-cmpt_foreground hover:bg-cmpt_secondary hover:border-cmpt_primary/30",
                    "transition-all duration-200",
                    "disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-cmpt_secondary/50 disabled:hover:border-cmpt_border"
                  )}
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            )}
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between lg:justify-end gap-4">
            <div className="text-right">
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold price-text">
                  {currencySymbol}
                  {formatPrice(displayPrice)}
                </span>
                <span className="text-sm text-cmpt_muted-foreground">
                  {intervalLabel}
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <button
            className={cn(
                "px-5 py-2.5 rounded-cmpt_md text-sm font-semibold transition-all duration-200",
                plan.popular
                ? "bg-cmpt_primary text-cmpt_primary-foreground hover:bg-cmpt_primary/90 glow-subtle"
                : "bg-cmpt_secondary/50 text-cmpt_foreground border border-cmpt_border hover:bg-cmpt_secondary hover:border-cmpt_primary/30"
            )}
            >
            Select Plan
            </button>
        </div>
    </div>
  );
}