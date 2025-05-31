import {
  useCreatePlanMutation,
  useGetPlansQuery,
} from "@/store/api/plansApiSlice";

export default function usePlans() {
  const [createPlan, { isLoading: createPlanLoading }] =
    useCreatePlanMutation();
  const { data: plans, isLoading: plansLoading } = useGetPlansQuery();
  const handleCreatePlan = async (planData) => {
    try {
      const response = await createPlan(planData).unwrap();
      console.log(response);
      if (response?.data) {
        toast.success("Plan created successfully!");
      }
    } catch (error) {
      console.error("Failed to create plan:", error);
      throw error;
    }
  };
  return {
    plans: plans?.data,
    plansLoading,
    handleCreatePlan,
    createPlanLoading,
  };
}
