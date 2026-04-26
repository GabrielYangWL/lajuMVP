export const billingService = {
  async createCheckout(_userId: string, _idempotencyKey: string) {
    // TODO: call Midtrans Snap API, create Subscription record with PENDING status
    throw new Error("Not implemented");
  },

  async handleWebhook(_payload: unknown) {
    // TODO: verify Midtrans signature, transition Subscription state, log EventLog
    throw new Error("Not implemented");
  },
};
