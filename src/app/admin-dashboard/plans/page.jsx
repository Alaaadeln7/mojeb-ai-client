"use client";

import { useState } from "react";
import Plan from "./Plan";
import usePlans from "@/hooks/usePlans";
import { Plus } from "lucide-react";
import { PlanCardSkeleton } from "@/components/skeletons/PlansSkeleton";
import CreatePlanModal from "./CreatePlanModal";

export default function Plans() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { plans, plansLoading } = usePlans();
  const renderPlans = plans?.map((plan, index) => (
    <Plan
      key={index}
      title={plan.title}
      id={plan._id}
      price={plan.price}
      currency={plan.currency}
      billingCycle={plan.billingCycle}
      features={plan.features}
      // onClick={() => setIsModalOpen(true)}
    />
  ));
  return (
    <>
      <section className="mb-30 sm:mx-10 mx-2 mt-10">
        <h1 className="font-bold sm:text-2xl text-xl text-center my-5">
          Plans
        </h1>
        <div className="flex justify-center gap-4 flex-wrap">
          {plansLoading ? <PlanCardSkeleton /> : renderPlans}
          <div className="flex justify-center items-center sm:w-1/4 w-4/4 p-5 bg-base-300 rounded-xl">
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn btn-neutral btn-circle"
            >
              <Plus className="size-5" />
            </button>
          </div>
        </div>
      </section>
      {isModalOpen && <CreatePlanModal setIsModalOpen={setIsModalOpen} />}
    </>
  );
}
