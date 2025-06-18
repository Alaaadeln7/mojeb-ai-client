import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import useClient from "@/hooks/useClient";
import ProfileModalSkeleton from "@/components/skeletons/ProfileModalSkeleton";

export default function ProfileModal({ setIsOpenProfile }) {
  const { currentClient, getClientLoading } = useClient();
  console.log(currentClient);
  if (!currentClient) return null;
  if (getClientLoading) return <ProfileModalSkeleton />;
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsModalOpen(false)}
      >
        <motion.div
          className="bg-base-100 rounded-xl shadow-xl max-w-lg w-full p-6 max-h-[90vh] overflow-y-auto"
          initial={{ y: -50, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 20, opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Profile</h2>
            <button
              onClick={() => setIsOpenProfile(false)}
              className="btn btn-error btn-circle text-base-300 btn-sm"
            >
              <X className="size-4" />
            </button>
          </div>

          <div className="max-w-3xl mx-auto mt-10 bg-base-100 shadow-md rounded-xl p-8 space-y-6 ">
            <div className="text-center">
              <p className="">
                Client ID:{" "}
                <span className="font-mono text-blue-600">
                  {currentClient?._id}
                </span>
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h2 className="font-semibold">Name:</h2>
                <p>{currentClient.name}</p>
              </div>
              <div>
                <h2 className="font-semibold">Address:</h2>
                <p>{currentClient.address}</p>
              </div>
              <div>
                <h2 className="font-semibold">Phone:</h2>
                <p>{currentClient.phone}</p>
              </div>
              <div>
                <h2 className="font-semibold">Email:</h2>
                <p>
                  <a
                    href={`mailto:${currentClient.email}`}
                    className="text-blue-600 underline"
                  >
                    {currentClient.email}
                  </a>
                </p>
              </div>
              <div>
                <h2 className="font-semibold">Industry:</h2>
                <p>{currentClient.industry}</p>
              </div>
              <div>
                <h2 className="font-semibold">Company Size:</h2>
                <p>{currentClient.size}</p>
              </div>
              <div>
                <h2 className="font-semibold">Commercial Register:</h2>
                <p>{currentClient.commercialRegister}</p>
              </div>
              <div>
                <h2 className="font-semibold">Tax ID:</h2>
                <p>{currentClient.taxId}</p>
              </div>
              <div>
                <h2 className="font-semibold">Website:</h2>
                <p>
                  <a
                    href={currentClient.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    {currentClient.website}
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-semibold">Description:</h2>
              <p className="italic text-gray-600">
                {currentClient.description}
              </p>
            </div>

            <div className="text-sm  text-right">
              <p>
                Created at:{" "}
                {new Date(currentClient.createdAt).toLocaleDateString()}
              </p>
              <p>
                Last updated:{" "}
                {new Date(currentClient.updatedAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
