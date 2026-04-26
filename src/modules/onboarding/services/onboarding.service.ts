export const onboardingService = {
  async saveSurvey(_userId: string, _answers: unknown) {
    // TODO: validate answers, call surveyRepository.upsert
    throw new Error("Not implemented");
  },

  async completeSurvey(_userId: string) {
    // TODO: mark survey complete, trigger AI initial analysis
    throw new Error("Not implemented");
  },
};
