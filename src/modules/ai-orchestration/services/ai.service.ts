export const aiService = {
  async generateRapor(_userId: string) {
    // TODO:
    // 1. Gather scoped context (blueprint + active mimpi + recent check-ins only)
    // 2. Build prompt using context
    // 3. Call Anthropic API (model from ANTHROPIC_MODEL env var)
    // 4. Parse structured output
    // 5. aiReportRepository.create — store prompt and response for observability
    // 6. Return AiReportOutput
    throw new Error("Not implemented");
  },

  async chat(_userId: string, _mode: string, _message: string) {
    // TODO: route to appropriate mode handler
    throw new Error("Not implemented");
  },
};
