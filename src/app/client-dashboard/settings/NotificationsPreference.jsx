"use client";

import useClient from "@/hooks/useClient";

export default function NotificationsPreference() {
  const {
    handleEmailNotification,
    emailNotificationLoading,
    handlePlanUsageAlert,
    planUsageAlertLoading,
    handlePerformanceReports,
    performanceReportsLoading,
    handleTicketEscalationAlert,
    ticketEscalationAlertLoading,
    currentClient,
  } = useClient();
  return (
    <div className="bg-base-100 p-5 rounded-2xl shadow-sm">
      <h1 className="font-bold text-2xl">Notifications Preference</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 my-5 space-y-3">
        {/* Email Notifications */}
        <label className="label cursor-pointer flex items-center gap-2">
          {emailNotificationLoading ? (
            <div className="skeleton h-6 w-6 rounded" />
          ) : (
            <input
              type="checkbox"
              className="checkbox"
              onChange={handleEmailNotification}
              checked={currentClient?.emailNotification || false}
            />
          )}
          <span className="label-text">Email Notifications</span>
        </label>

        {/* Plan Usage Alert */}
        <label className="label cursor-pointer flex items-center gap-2">
          {planUsageAlertLoading ? (
            <div className="skeleton h-6 w-6 rounded" />
          ) : (
            <input
              type="checkbox"
              className="checkbox"
              onChange={handlePlanUsageAlert}
              checked={currentClient?.planUsageAlert || false}
            />
          )}
          <span className="label-text">Plan Usage Alert</span>
        </label>

        {/* Ticket Escalation Alert */}
        <label className="label cursor-pointer flex items-center gap-2">
          {ticketEscalationAlertLoading ? (
            <div className="skeleton h-6 w-6 rounded" />
          ) : (
            <input
              type="checkbox"
              className="checkbox"
              onChange={handleTicketEscalationAlert}
              checked={currentClient?.ticketEscalationAlert || false}
            />
          )}
          <span className="label-text">Ticket Escalation Alert</span>
        </label>

        {/* Performance Reports */}
        <label className="label cursor-pointer flex items-center gap-2">
          {performanceReportsLoading ? (
            <div className="skeleton h-6 w-6 rounded" />
          ) : (
            <input
              type="checkbox"
              className="checkbox"
              onChange={handlePerformanceReports}
              checked={currentClient?.performanceReports || false}
            />
          )}
          <span className="label-text">Performance Reports</span>
        </label>
      </div>
    </div>
  );
}
